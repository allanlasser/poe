import fetch from 'isomorphic-fetch';

export const requestTitles = () => ({
  type: 'REQUEST_TITLES'
});

export const receiveTitles = (titles) => ({
  type: 'RECEIVE_TITLES',
  titles
});

function fetchTitles() {
  return (dispatch) => {
    dispatch(requestTitles());
    const endpoint = '/api/poems/';
    return fetch(endpoint)
      .then(response => response.json())
      .then(titles => {
        dispatch(receiveTitles(titles));
      });
  };
}

function shouldFetchTitles(state) {
  // titles.titles will be empty to start
  return state.titles.titles.length == 0;
}

export function fetchTitlesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchTitles(getState())) {
      return dispatch(fetchTitles());
    } else {
      return Promise.resolve();
    }
  };
}

export const requestPoem = (title) => ({
  type: 'REQUEST_POEM',
  title
});

const receivePoem = (poem) => ({
  type: 'RECEIVE_POEM',
  title: poem.title,
  poem,
});

function fetchPoem(title) {
  return (dispatch) => {
    dispatch(requestPoem(title));
    const endpoint = `/api/poems/${title}`;
    return fetch(endpoint)
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(poems => {
        if (poems.length > 0) {
          const poem = poems[0];
          dispatch(receivePoem(poem));
        }
      });
  };
};

function shouldFetchPoem(state, title) {
  const poem = state.poems[title];
  return !poem;
};

export function fetchPoemIfNeeded(title) {
  return (dispatch, getState) => {
    if (shouldFetchPoem(getState(), title)) {
      return dispatch(fetchPoem(title));
    } else {
      return Promise.resolve();
    }
  };
}
