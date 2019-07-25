import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Table from 'react-bootstrap/Table';
import CustomerModal from '../customerModal/customer-modal.component';
import CustomerEditModal from '../customerModal/customer-edit-modal.component';
import Navbar from "react-bootstrap/Navbar";
import {Route} from "react-router-dom";
// import {getCustomer} from "../../actions/customers";

function Customers(props) {
  console.log('Customers props', props);

  // Obj to set data to child customer-edit-modal.component
  let customer = props.customerToEdit;

  // get customer # from child path id. srt it to parent App.js
  function onClickHandler(e) {
    props.onGetCustomer(e.target.href.split('edit/')[1]);
  }

  // Open child CustomerModal using routing
  function CustomerCreateRoute() {return <CustomerModal
    addCustomerModal = {addCustomer}
  />}
  function CustomerEditRoute() {
    return <CustomerEditModal
      addCustomerModal = {addCustomer}
      customerModal = {customer}
      // getCustomerModal = {getCustomer}
    />}

  // Metod to get data from child Customer-Modal
  function addCustomer(customer){
    //Uploading Data Obj to parent App.js
    props.onAddCustomer(customer, 'addCustomer');
  }

  return (
    <div className='table_component'>

      <Navbar expand="sm" variant="light" bg="light">
        <h1 className='tabName'>Customer list</h1>
        <Navbar.Brand href="/customers/create">
          <ButtonToolbar>
            <Button variant="outline-secondary">Create</Button>
          </ButtonToolbar>
        </Navbar.Brand>
      </Navbar>
      <Route path="/customers/create/" exact component={CustomerCreateRoute} />
      <Route path='/customers/edit/' component={CustomerEditRoute} />


      <Table responsive>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
        </tr>
        </thead>
        <tbody>
        {
          props.customers.map(function (customer) {
            return <tr onClick={onClickHandler} className='tableRow' key={customer.id}>
              <td>{customer.id}</td>

              <td>
                <Navbar.Brand  href={"/customers/edit/"+customer.id}>
                  {customer.name}
                </Navbar.Brand>
              </td>
              <td>
                <Navbar.Brand  href={"/customers/edit/"+customer.id}>
                  {customer.address}
                </Navbar.Brand>
              </td>
              <td>
                <Navbar.Brand  href={"/customers/edit/"+customer.id}>
                  {customer.phone}
                </Navbar.Brand>
              </td>
            </tr>


          })
        }
        </tbody>
      </Table>
    </div>
  );
}

export default Customers;
