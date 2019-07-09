import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore} from "redux";

const store = createStore(gripSoft, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let initialState = {};

const customersUrl = 'http://localhost:8000/api/customers/';
const productsUrl = 'http://localhost:8000/api/products/';
const invoicesUrl = 'http://localhost:8000/api/invoices/';

const customers = fetch(customersUrl)
  .then(response => response.json())
  .then(customersRes => customersRes)
  .catch( alert );

const products = fetch(productsUrl)
  .then(response => response.json())
  .then(productsRes => productsRes)
  .catch( alert );

const invoices = fetch(invoicesUrl)
  .then(response => response.json())
  .then(invoicesRes => invoicesRes)
  .catch( alert );

Promise.all([customers, products, invoices]).then(values => {
  initialState.customers = values[0];
  initialState.products = values[1];
  initialState.invoices = values[2];
  store.dispatch({type: 'ADD_PAYLOAD', payload: initialState});
});

function gripSoft(state=  {
  customers: [],
  products: [],
  invoices: []
} , action) {// reducer
  if (action.type === 'ADD_PAYLOAD'){return action.payload;}
  return state;
}

// store.subscribe(() => {
//   console.log('index subscribe store.getState', store.getState().customers[0].name);
// });
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
