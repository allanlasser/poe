import fetch from 'isomorphic-fetch';

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
    const endpoint = `/poems/${title}`;
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
