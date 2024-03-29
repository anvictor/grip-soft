import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const serverPath = 'http://localhost:8000';
const customersUrl = serverPath + '/api/customers/';
const productsUrl = serverPath + '/api/products/';
const invoicesUrl = serverPath + '/api/invoices/';

const customers = fetch(customersUrl)
  .then(response => response.json())
  .catch( alert );

const products = fetch(productsUrl)
  .then(response => response.json())
  .catch( alert );

const invoices = fetch(invoicesUrl)
  .then(response => response.json())
  .catch( alert );

Promise.all([invoices, products, customers]).then(values => {
  store.dispatch({type: 'ADD_INVOICES', payload: values[0]});
  store.dispatch({type: 'ADD_PRODUCTS', payload: values[1]});
  store.dispatch({type: 'ADD_CUSTOMERS', payload: values[2]});
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
