import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Table from 'react-bootstrap/Table';
import CustomerModal from '../customerModal/customer-modal.component';

function Customers(props) {

  const [modalShow, setModalShow] = useState(false);
  const [action, setAction] = useState('');

  let modalClose = () => setModalShow(false);

  function showCustomer(){
    setModalShow(!modalShow);
    setAction('Edit');

  }

  function addCustomer(e){
    console.log('Customer.component/addCustomer get this data:', e);
    try {
      console.log('name',e.name,'address',e.address,'phone',e.phone);
    }catch (e) {
      console.log('on this moment Customers:Obj is undefined');
    }
  }

  return (
    <div className='table_component'>
      <ButtonToolbar>
        <h1>Customer list</h1>
        <Button onClick={showCustomer} variant="outline-secondary">Create</Button>
      </ButtonToolbar>

      <CustomerModal
      show={modalShow}
      onHide={modalClose}
      addCustomerModal = {addCustomer}
      action = {action}
      />

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
            props.customers.map(function (customer, index) {
              return <tr key={index}>
                <td>{index}</td>
                <td>{customer.name}</td>
                <td>{customer.address}</td>
                <td>{customer.phone}</td>
              </tr>
            })
          }
        </tbody>
      </Table>
    </div>
  );
}

export default Customers;
