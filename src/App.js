import React from 'react';
import { connect } from 'react-redux';
import Customers from './customers/customers.component';
import Navbar from 'react-bootstrap/Navbar'
import Products from "./products/products.component";
import Invoices from "./invoices/invoices.component";
import "./App.css";
function App(props) {

  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <h5>Invoice App</h5>
        <Navbar.Brand href="/invoices">Invoices</Navbar.Brand>
        <Navbar.Brand href="/products">Products</Navbar.Brand>
        <Navbar.Brand href="/customers">Customers</Navbar.Brand>
      </Navbar>
      <Customers customers = {props.localState.customers} />
      <Products products = {props.localState.products} />
      <Invoices invoices = {props.localState.invoices} />
    </div>
  );
}

export default connect(
  state => ({
    localState: state
  }),
  dispatch =>({})
)(App);
