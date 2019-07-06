import React from 'react';
import { connect } from 'react-redux';
import Customers from './customers/customers.component';
import Navbar from 'react-bootstrap/Navbar'
function App(props) {
  console.log('App props', props.localState);

  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <h5>Invoice App</h5>
        <Navbar.Brand href="/invoices">Invoices</Navbar.Brand>
        <Navbar.Brand href="/products">Products</Navbar.Brand>
        <Navbar.Brand href="/customers">Customers</Navbar.Brand>
      </Navbar>
      <Customers customers = {props.localState} />
    </div>
  );
}

export default connect(
  state => ({
    localState: state
  }),
  dispatch =>({})
)(App);
