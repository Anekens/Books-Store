import {connect} from 'react-redux';
import Menu from './Menu';
import uniqBy from 'lodash/uniqBy';
import {addToCart} from "../redux/reducers/cart";
import {removeFromCart} from "../redux/reducers/cart";

const mapStateToProps = ({cart}) => ({
    totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
    count: cart.items.length,
    items: uniqBy(cart.items, o => o.id),
});

export default connect(mapStateToProps, {addToCart, removeFromCart})(Menu);
