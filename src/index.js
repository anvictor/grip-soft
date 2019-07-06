import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore} from "redux";

const initialState = {};
// initialState.customers="g";
const customersUrl = 'http://localhost:8000/api/customers/';
// const productsUrl = 'http://localhost:8000/api/products/';
// const invoicesUrl = 'http://localhost:8000/api/invoices/';

fetch(customersUrl)
  .then(response => response.json())
  .then(customersRes =>{
    console.log('customersRes', customersRes)
    initialState.customers = customersRes
  })
  .catch( alert );

// const products =
//   fetch(productsUrl)
//     .then(response => response.json())
//     .then(products => {products.map(product => {
//       let productsObj = new initialProducts(
//         product.id,
//         product.name,
//         product.address,
//         product.phone
//       );
//       initialState.products.push(productsObj)
//     })
//     });
//
// const invoices =
//   fetch(invoicesUrl)
//     .then(response => response.json())
//     .then(invoices => {invoices.map(invoice => {
//       let invoicesObj = new initialInvoices(
//         invoice.id,
//         invoice.name,
//         invoice.address,
//         invoice.phone
//       );
//       initialState.invoices.push(invoicesObj)
//     })
//     });

function gripSoft(state = initialState, action) {// reducer
  if (action.type === 'ADD_CUSTOMERS'){return [...state, action.payload];}
  return state;
}

const store = createStore(gripSoft, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
