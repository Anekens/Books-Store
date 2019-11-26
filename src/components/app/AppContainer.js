import {connect} from 'react-redux'
import {setBooks, setFilter} from "../../redux/reducers/books";
import {compose} from "redux";
import App from "./App";
import orderBy from 'lodash/orderBy'


const sortBy = (books, filterBy) => {
    switch (filterBy) {
        case 'all':
            return books;
        case 'priceHigh':
            return orderBy(books, 'price', 'desc');
        case 'priceLow':
            return orderBy(books, 'price', 'asc');
        case 'author':
            return orderBy(books, 'author', 'asc');
        default:
            return books
    }
};

const mapStateToProps = ({books}) => ({
    books: sortBy(books.items, books.filterBy),
    isReady: books.isReady,

});


export default compose(
    connect(mapStateToProps, {setBooks, setFilter}))(App);