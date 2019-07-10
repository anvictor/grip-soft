import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import customers from './customers';
import products from './products';
import invoices from './invoices';
export default combineReducers({
  routing: routerReducer,
  customers,
  products,
  invoices
})
