import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Navbar from "react-bootstrap/Navbar";

export default function CustomerEditModal (props) {
  console.log('CustomersEdit/props', props);
  let customerID = window.location.pathname.split('edit/')[1]; //get customer id from url

  //props.getCustomerModal(customerID);// return id to parent

  // Obj to show data on child ModalContent below
  let customerModal = props.customerModal;

  // Metod to collect data from child ModalContent below
  function CollectData(customer) {
    try {
      if(customer.name){customerModal.name = customer.name};
      if(customer.address){customerModal.address = customer.address};
      if(customer.phone){customerModal.phone = customer.phone};
    } catch (e) {
      console.log('customer.field undefined now');
    }
  }
//Uploading Collected Data Obj to parent customer.component
  function onSubmit() {
    props.addCustomerModal(customerModal);
  }
  function onDelete() {
    console.log('onDelete');
  }
  return (
    <Modal show = {true}
           size="lg"
           aria-labelledby="contained-modal-title-vcenter"
           centered
    >

      <Navbar className="NavModal" expand="lg" variant="light" bg="light">

        <Navbar.Brand href="/customers/">
          <Modal.Header closeButton/>
        </Navbar.Brand>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Customer # {customerID}:
        </Modal.Title>
      </Navbar>

      <Modal.Body>
        {/*ModalContent child-Component see below*/}
        <ModalContent CollectDataModalContent={CollectData}
                      customerModalContent={customerModal}
                      getCustomer/>
      </Modal.Body>
      <Navbar className="NavModal" expand="lg" variant="light" bg="light">
        <Navbar.Brand href="/customers/">
          <Modal.Footer>
            <Button onClick={onSubmit} variant="primary" type="submit">
              Submit
            </Button>
            <Button onClick={onDelete} variant="outline-secondary" type="submit">
              Delete
            </Button>
            <Button variant="secondary" >Exit</Button>
          </Modal.Footer>
        </Navbar.Brand>

      </Navbar>
    </Modal>
  );
}

// this is Modal.Body part **********************************************************
class  ModalContent extends React.Component{
  constructor(props) {
    super(props);
    this.textInput = this.textInput.bind(this);
  }

// Obj to collect typing data
  customerModalContent ={
    address: "",
    name: "s5s5s5s5s5",
    phone: ""
  };

  // Metod to collect typing data
  textInput = (event) => {

    if (event.target.id === "formBasicName"){
      this.customerModalContent.name= event.target.value;
    }else
    if (event.target.id === "formBasicAddress"){
      this.customerModalContent.address= event.target.value;
    }else
    if (event.target.id === "formBasicPhone"){
      this.customerModalContent.phone= event.target.value;
    }
    //Uploading Collected Data to parent CustomerModal above
    this.props.CollectDataModalContent(this.customerModalContent)
  };

  render(){
    console.log('edit modal body props', this.props);
    return <Form>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={this.textInput} type="text"
                      value={this.props.customerModalContent.name}
                      placeholder="Enter Name" />
      </Form.Group>
      <Form.Group controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control onChange={this.textInput} type="text"
                      value={this.props.customerModalContent.address}
                      placeholder="Enter Address" />
      </Form.Group>
      <Form.Group controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control onChange={this.textInput} type="text"
                      value={this.props.customerModalContent.phone}
                      placeholder="Enter Phone" />
      </Form.Group>

    </Form>
  }}
