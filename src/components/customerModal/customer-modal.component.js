import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

export default class CustomerModal extends React.Component {
  render() {
    console.log(this.props);
function onCloseListener() {
  console.log('onCloseListener works');
}
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.action}Customer:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onCloseListener}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}




