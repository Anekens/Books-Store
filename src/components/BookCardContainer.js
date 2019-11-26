import {connect} from 'react-redux';
import BookCard from './BookCard';
import {addToCart} from "../redux/reducers/cart";
import {removeFromCart} from "../redux/reducers/cart";

const mapStateToProps = ({cart}, {id}) => ({
    addedCount: cart.items.reduce((count, book) => count + (book.id === id ? 1 : 0), 0),
});

export default connect(mapStateToProps, {addToCart, removeFromCart})(BookCard);
