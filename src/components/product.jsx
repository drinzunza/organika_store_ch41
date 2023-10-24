import './product.css';
import QuantityPicker from './quantityPicker';
import { useEffect, useState } from 'react';

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  useEffect(function () {
    console.log("Hello i'm a product");
  }, []);

  function onQuantityChange(qty) {
    setQuantity(qty);
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
    </div>
  );
}

export default Product;
