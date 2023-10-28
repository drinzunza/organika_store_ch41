import './product.css';
import QuantityPicker from './quantityPicker';
import { useEffect, useState, useContext } from 'react';
import DataContext from '../store/dataContext';

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useContext(DataContext).addToCart;

  function onQuantityChange(qty) {
    setQuantity(qty);
  }

  function handleAdd() {
    let prodCart = { ...props.data };
    prodCart.quantity = quantity;
    addToCart(prodCart);
  }

  return (
    <div className="product">
      <img src={'/images/' + props.data.image} alt="placeholder" />
      <h5>{props.data.title}</h5>
      <div className="prices">
        <label>Price: {props.data.price.toFixed(2)}</label>
        <label>Total: {props.data.price * quantity} </label>
      </div>

      <QuantityPicker onChange={onQuantityChange} />

      <button onClick={handleAdd} className="btn btn-sm btn-outline-success">
        <i className="fa-solid fa-cart-plus"></i>
      </button>
    </div>
  );
}

export default Product;
