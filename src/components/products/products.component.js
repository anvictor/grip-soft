import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Table from 'react-bootstrap/Table';

function Products(props) {
  function addProduct(){
    props.onAddProduct({
      createdAt: "new created At",
      id: 526,
      name: "new Product",
      price: 129.99,
      updatedAt: "new updated At"
    })
  }
  return (
    <div className='table_component'>
      <ButtonToolbar>
        <h1>Product list</h1>
        <Button onClick={addProduct} variant="outline-secondary">Create</Button>
      </ButtonToolbar>

      <Table responsive>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>
          {
            props.products.map(function (product, index) {
              return <tr key={index}>
                <td>{index}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            })
          }
        </tbody>
      </Table>
    </div>
  );
}

export default Products;
