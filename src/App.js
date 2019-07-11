import React from 'react';
import { connect } from 'react-redux';
import Customers from './components/customers/customers.component';
import Navbar from 'react-bootstrap/Navbar'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Products from "./components/products/products.component";
import Invoices from "./components/invoices/invoices.component";
import "./App.css";
import getCustomers from './actions/customers';

function App(props) {
  console.log('App', props);
  function InvoicesRoute() {return <Invoices onAddInvoice={onAddNewInvoice} invoices = {props.invoices} />}
  function ProductsRoute() {return <Products onAddProduct={onAddNewProduct} products = {props.products} />}
  function CustomersRoute() {return <Customers onAddCustomer={onAddNewCustomer} customers = {props.customers}/>}

  function onAddNewInvoice(e) {props.onAddInvoice(e)}
  function onAddNewProduct(e) {props.onAddProduct(e)}
  function onAddNewCustomer(e) {props.onAddCustomer(e)}
  return (
    <Router>


      <Navbar expand="lg" variant="light" bg="light">
        <h2>Invoice App</h2>
        <Navbar.Brand href="/invoices">Invoices</Navbar.Brand>
        <Navbar.Brand href="/products">Products</Navbar.Brand>
        <Navbar.Brand onClick={props.onGetCustomers} href="/customers">Customers</Navbar.Brand>
      </Navbar>
      <Route path="/invoices/" exact component={InvoicesRoute} />
      <Route path="/products/" component={ProductsRoute} />
      <Route path="/customers/" component={CustomersRoute} />
    </Router>
  );
}

export default connect(
  state => ({
    customers: state.customers,
    products: state.products,
    invoices: state.invoices
  }),
  dispatch =>({
    onAddProduct(e){dispatch({type: 'ADD_PRODUCT', payload: e});},
    onAddInvoice(e){dispatch({type: 'ADD_INVOICE', payload: e});},
    onAddCustomer(e){dispatch({type: 'ADD_CUSTOMER', payload: e});},
    onGetCustomers: () => {dispatch(getCustomers());}
  })
)(App);
