const ADD_TO_CART = 'BooksStore/redux/reducers/ADD-TO-CART';
const REMOVE_FROM_CART = 'BooksStore/redux/reducers/REMOVE-FROM-CART';


const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(o => o.id !== action.payload)
      };
    default:
      return state;
  }
};

export const addToCart = obj => ({
  type: ADD_TO_CART,
  payload: obj,
});

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

