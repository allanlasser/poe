function poem(state = {
  isFetching: false,
  poem: {
    title: null,
    author: null,
    lines: [],
    lineCount: 0
  }
}, action) {
  switch (action.type) {
    case 'REQUEST_POEM':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'RECEIVE_POEM':
      return Object.assign({}, state, {
        isFetching: false,
        poem: action.poem
      });
    default:
      return state;
  }
}

export function poems(state = {}, action) {
  switch (action.type) {
    case 'REQUEST_POEM':
    case 'RECEIVE_POEM':
      return Object.assign({}, state, {
        [action.title]: poem([action.title], action)
      });
    default:
      return state;
  }
}

export function titles(state = {
  isFetching: false,
  titles: []
}, action) {
  switch (action.type) {
    case 'REQUEST_TITLES':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'RECEIVE_TITLES':
      return Object.assign({}, state, {
        isFetching: false,
        titles: action.titles,
      });
    default:
      return state;
  }
}
