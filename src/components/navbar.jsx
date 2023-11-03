import './navbar.css';
import { Link } from 'react-router-dom';
import DataContext from '../store/dataContext';
import { useContext } from 'react';

function Navbar() {
  const user = useContext(DataContext).user;
  const cart = useContext(DataContext).cart;

  function getCount() {
    let sum = 0;

    for (let i = 0; i < cart.length; i++) {
      const prod = cart[i];
      sum += prod.quantity;
    }

    return sum;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-body-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Organika
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/catalog">
                Catalog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                About us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/admin">
                Admin
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <Link to="/cart" className="btn btn-outline-light">
              {getCount()}
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>

            <button type="button" className="btn btn-outline-light ms-2">
              {user.name}
              <i className="fa-solid fa-gear ms-2"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
