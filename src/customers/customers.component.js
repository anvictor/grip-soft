import React from 'react';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Table from 'react-bootstrap/Table'
function Customers(props) {
  console.log('Customers props', props.customers);

  return (
    <div>

      <ButtonToolbar>
        <h1>Customer list</h1>
        <Button variant="outline-secondary">Create</Button>
      </ButtonToolbar>

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
          {/*{*/}
            {/*props.customers.map(function (customer, index) {*/}
              {/*return <tr key={index}>*/}
                {/*<td>{index}</td>*/}
                {/*<td>{customer.name}</td>*/}
                {/*<td>{customer.address}</td>*/}
                {/*<td>{customer.phone}</td>*/}
              {/*</tr>*/}
            {/*})*/}
          {/*}*/}

        </tbody>
      </Table>
    </div>
  );
}

export default Customers;
