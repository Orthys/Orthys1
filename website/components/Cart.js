import React from 'react';
import CartItem from './CartItem';
import { removeFromCart, updateCart } from '../utils/cart';
import styles from '../styles/Cart.module.css';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  componentDidMount() {
    this.setState({ cartItems: this.props.cartItems });
  }

  handleRemoveFromCart = (id) => {
    const updatedCartItems = removeFromCart(this.state.cartItems, id);
    this.setState({ cartItems: updatedCartItems });
  }

  handleQuantityChange = (id, quantity) => {
    const updatedCartItems = updateCart(this.state.cartItems, id, quantity);
    this.setState({ cartItems: updatedCartItems });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div id="cart" className={styles.cart}>
        <h2>Your Cart</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={this.handleRemoveFromCart}
              onQuantityChange={this.handleQuantityChange}
            />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    );
  }
}

export default Cart;