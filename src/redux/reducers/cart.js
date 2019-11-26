const ADD_BOOK = 'booksReducer/ADD-BOOK-TO-CART';
const REMOVE_BOOK = 'booksReducer/REMOVE-BOOK-FROM-CARD';


const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
               items: [
                   ...state.items,
                   action.payload
               ]
            };
        case REMOVE_BOOK:
            return {
                ...state,
                items: state.items.filter(obj=> obj.id !== action.payload.id)
            };
        default:
            return state;
    }
};


