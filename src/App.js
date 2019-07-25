import React from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar'
import { BrowserRouter as Router, Route} from "react-router-dom";
import * as types from './constants/ActionTypes';
import Invoices from "./components/invoices/invoices.component";
import Products from "./components/products/products.component";
import Customers from './components/customers/customers.component';
import "./App.css";
import ApiService from './api-service';
import * as pathes from './constants/ServerPath';
// import getCustomers from './actions/customers';

function App(props) {
  console.log('App props', props);

  // Open children: Invoice, Products, Customers using routing
  function InvoicesRoute() {return <Invoices onAddInvoice={onAddNewInvoice} invoices = {props.invoices} />}
  function ProductsRoute() {return <Products onAddProduct={onAddNewProduct} products = {props.products} />}
  function CustomersRoute() {return <Customers
    onAddCustomer={onAddNewCustomer}
    onGetCustomer={onGetCustomer}
    customers = {props.customers}
    customerToEdit = {props.customerToEdit}
  />}

  function onAddNewInvoice(e) {props.onAddInvoice(e)}
  function onAddNewProduct(e) {props.onAddProduct(e)}
  function onAddNewCustomer(customer) {ApiService(customer, 'addCustomer')}
  function onGetCustomer(id) {props.onGetCustomer(id)}

  return (
    <Router>
      <Navbar expand="lg" variant="light" bg="light">
        <h2>Invoice App</h2>
        <Navbar.Brand href="/invoices">Invoices</Navbar.Brand>
        <Navbar.Brand href="/products">Products</Navbar.Brand>
        <Navbar.Brand href="/customers">Customers</Navbar.Brand>
      </Navbar>
      <Route path="/invoices/" exact component={InvoicesRoute} />
      <Route path="/products/" component={ProductsRoute} />
      <Route path="/customers/" component={CustomersRoute} />
    </Router>
  );
}

export default connect(
  state => ({ // map state to props
    customers: state.customers,
    products: state.products,
    invoices: state.invoices,
    customerToEdit: state.customerToEdit
  }),
  dispatch =>({
    onGetCustomer: (id) => {
      const asyncGetCustomer = (id) =>{
        return dispatch => {
          let apiUrl = pathes.ServerPath + '/api/customers/'+id;
          fetch(apiUrl)
            .then(response => response.json())
            .then(response => {
              // alert('empty or '+ response.name);
              dispatch({type: types.SET_CUSTOMER, payload: response});
            });
        }
      };
      dispatch(asyncGetCustomer(id));
    }
  })
)(App);



/*
{
  address: "NY",
  createdAt: "2019-07-25T08:03:44.991Z",
  id: 1,
  name: "Tom",
  phone: "555-534-2342",
  updatedAt: "2019-07-25T08:03:44.991Z"
}
*/
