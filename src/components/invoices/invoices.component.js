import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Table from 'react-bootstrap/Table';

function Invoices(props) {
  // props.onAddInvoice({
  //   id: 513,
  //   customer_id: 13,
  //   discount: 0.5,
  //   total: 125
  // })
  return (
    <div className='table_component'>
      <ButtonToolbar>
        <h1>Invoice list</h1>
        <Button variant="outline-secondary">Create</Button>
      </ButtonToolbar>

      <Table responsive>
        <thead>
        <tr>
          <th>#</th>
          <th>Customer</th>
          <th>Discount</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
          {
            props.invoices.map(function (invoice, index) {
              return <tr key={index}>
                <td>{index}</td>
                <td>{invoice.customer_id}</td>
                <td>{invoice.discount}</td>
                <td>{invoice.total}</td>
              </tr>
            })
          }
        </tbody>
      </Table>
    </div>
  );
}

export default Invoices;
