import Product from '../components/product';
import DataService from '../services/dataservice';
import './catalog.css';
import { useEffect, useState } from 'react';

function Catalog() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]); //[] means that im expecting several
  const [productsToDisplay, setProductsToDisplay] = useState([]);

  useEffect(function () {
    console.log('catalog loaded');
    loadCatalog();
  }, []);

  function loadCatalog() {
    let service = new DataService();
    let prods = service.getProducts();
    console.log(prods);
    setProducts(prods);
    setProductsToDisplay(prods);

    let cats = ['fruit', 'farm', 'groseries', 'merchandise'];
    setCategories(cats);
  }

  function filter(category) {
    console.log(category);
    let list = [];

    for (let i = 0; i < products.length; i++) {
      let prod = products[i];
      if (prod.category === category) {
        list.push(prod);
      }
    }
    
    setProductsToDisplay(list);
  }

  function clearFilters() {
    setProductsToDisplay(products);
  }

  return (
    <div className="catalog">
      <h1>Welcome to Organika the expensives store that you ever visit</h1>
      <h2>We have {products.length} new products for you</h2>
      <br />
      <button onClick={clearFilters} className="btn btn-sm btn-dark">
        Clear
      </button>
      {categories.map((arrowCategories) => (
        <button
          key={arrowCategories}
          onClick={() => filter(arrowCategories)}
          className="btn btn-sm btn-primary btn-filter"
        >
          {arrowCategories}
        </button>
      ))}
      <br />
      {productsToDisplay.map((item) => (
        <Product key={item._id} data={item} />
      ))}
    </div>
  );
}

export default Catalog;
