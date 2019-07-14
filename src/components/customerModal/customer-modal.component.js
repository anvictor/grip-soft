import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

export default class CustomerModal extends React.Component {
  constructor(props) {
    super(props);
  }

// 2019-07-10T09:47:45.110Z
  render() {

    let customerModal ={
      address: "",
      createdAt: "",
      id: null,
      name: "",
      phone: "",
      updatedAt: ""
    };

    function CollectData(e) {
      console.log('AddCustomer works', e);
      try {
        if(e.name){customerModal.name = e.name};
        if(e.address){customerModal.address = e.address};
        if(e.phone){customerModal.phone = e.phone};
      } catch (e) {
        console.log('customer.field now undefined');
      }
    }

    function onSubmit(event) {
      console.log('Submit works',customerModal );
      // this.props.addCustomerModal(customerModal);
      console.log('this***', this);
    }

    return (
      <Modal show = {this.props.show} onHide = {this.props.onHide}
             size="lg"
             aria-labelledby="contained-modal-title-vcenter"
             centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.action} Customer:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalContent CollectDataModalContent={CollectData} state={this.state} getCustomer/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>{
            onSubmit();
            this.props.onHide();
          }} variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="secondary" onClick={this.props.onHide}>Exit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class  ModalContent extends React.Component{
  constructor(props) {
    super(props);
    this.textInput = this.textInput.bind(this);
  }
  customerModalContent ={
    address: "",
    name: "",
    phone: ""
  };

  textInput = (e) => {

    if (e.target.id === "formBasicName"){
      this.customerModalContent.name= e.target.value;
    }else
    if (e.target.id === "formBasicAddress"){
      this.customerModalContent.address= e.target.value;
    }else
    if (e.target.id === "formBasicPhone"){
      this.customerModalContent.phone= e.target.value;
    }
    console.log(this.customerModalContent);
    this.props.CollectDataModalContent(this.customerModalContent)
  };

  render(){
    return <Form>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control onBlur={this.textInput} type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control onBlur={this.textInput} type="text" placeholder="Enter Address" />
      </Form.Group>
      <Form.Group controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control onBlur={this.textInput} type="text" placeholder="Enter Phone" />
      </Form.Group>

    </Form>
  }}
