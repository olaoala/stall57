// ReceiptModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ReceiptModal = ({ show, onHide, cartItems }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Receipt</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.map((item) => (
          <div key={item.id}>{item.image}{item.name}</div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReceiptModal;
