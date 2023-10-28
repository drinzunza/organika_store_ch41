import { createContext } from 'react';

/**
 * interface, blueprint
 * describes the data, but has no implementation
 */
const DataContext = createContext({
  cart: [],
  user: {},
  addToCart: () => {},
  removeFromCart: () => {},
});

export default DataContext;
