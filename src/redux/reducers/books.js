const SET_BOOKS = 'BooksStore/redux/reducers/SET-BOOKS';
const SET_IS_READY = 'BooksStore/redux/reducers/SET-IS-READY';


const initialState = {
   isReady: false,
  items: []
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        items: action.payload,
        isReady: true
      };
    case SET_IS_READY:
      return {
        ...state,
        isReady: action.payload
      };
    default:
      return state;
  }
};
export const setBooks = books => ({
  type: SET_BOOKS,
  payload: books
});

export default  booksReducer;