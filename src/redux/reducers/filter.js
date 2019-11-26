const SET_QUERY = 'BooksStore/redux/reducers/SET-QUERY';
const SET_FILTER = 'BooksStore/redux/reducers/SET-FILTER';

const initialState = {
  searchQuery: '',
  filterBy: 'all',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filterBy: action.payload,
      };
    default:
      return state;
  }
};

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter,
});

export const setSearchQuery = value => ({
  type: SET_QUERY,
  payload: value,
});

