import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Table from 'react-bootstrap/Table';
import CustomerModal from '../customerModal/customer-modal.component';

function Customers(props) {

  const [modalShow, setModalShow] = useState(false);
  const [action, setAction] = useState('');

  let modalClose = () => setModalShow(false);
  console.log('Customers', props);

  function addCustomer(){
    setModalShow(!modalShow);
    setAction('Create New ');
    // props.onAddCustomer({
    //   id: 513,
    //   name: "New Name",
    //   address: "new address",
    //   phone: "new phone",
    //   createdAt: "new createdAt",
    //   updatedAt: "new apdatedAt"
    // })
  }
  return (
    <div className='table_component'>
      <ButtonToolbar>
        <h1>Customer list</h1>
        <Button onClick={addCustomer} variant="outline-secondary">Create</Button>
      </ButtonToolbar>

      <CustomerModal
      show={modalShow}
      onHide={modalClose}
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
