import React from 'react';
import { connect } from 'react-redux';
import Customers from './components/customers/customers.component';
import Navbar from 'react-bootstrap/Navbar'
import Products from "./components/products/products.component";
import Invoices from "./components/invoices/invoices.component";
import "./App.css";
function App(props) {
  console.log('App', props);
  function onAddNewProduct(e) {props.onAddProduct(e)}
  function onAddNewInvoice(e) {props.onAddInvoice(e)}
  function onAddNewCustomer(e) {props.onAddCustomer(e)}
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <h5>Invoice App</h5>
        <Navbar.Brand href="/invoices">Invoices</Navbar.Brand>
        <Navbar.Brand href="/products">Products</Navbar.Brand>
        <Navbar.Brand href="/customers">Customers</Navbar.Brand>
      </Navbar>
      <Customers onAddCustomer={onAddNewCustomer} customers = {props.customers}/>
      <Products onAddProduct={onAddNewProduct} products = {props.products} />
      <Invoices onAddInvoice={onAddNewInvoice} invoices = {props.invoices} />
    </div>
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
    onAddCustomer(e){dispatch({type: 'ADD_CUSTOMER', payload: e});}
  })
)(App);
