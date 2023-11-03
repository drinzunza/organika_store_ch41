import { useContext } from 'react';
import './cart.css';
import DataContext from '../store/dataContext';
import CartProduct from '../components/cartProduct';

function Cart() {
  const cart = useContext(DataContext).cart;

  function getCount() {
    let sum = 0;

    for (let i = 0; i < cart.length; i++) {
      const prod = cart[i];
      sum += prod.quantity;
    }

    return sum;
  }

  function getTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      const prod = cart[i];
      total += prod.quantity * prod.price;
    }

    return total.toFixed(2);
  }

  return (
    <div className="cart page">
      <h1 className="title">Your Cart</h1>
      <h3>You have selected {getCount()} products</h3>

      <div className="parent">
        <div className="list">
          {cart.map((prod) => (
            <CartProduct data={prod} key={prod._id} />
          ))}
        </div>

        <aside>
          <h4>Total</h4>
          <h3>${getTotal()}</h3>

          <hr />

          <div className="input-group">
            <input type="text" className="form-control" placeholder="Coupon Code" />
            <button className="btn btn-outline-success">Apply</button>
          </div>

          <hr />

          <button className="btn btn-dark btn-pay">
            <i class="fa-solid fa-money-check-dollar me-1"></i>
            Pay
          </button>
        </aside>
      </div>
    </div>
  );
}

export default Cart;
