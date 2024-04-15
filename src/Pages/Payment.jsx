import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Paystackpop from '@paystack/inline-js'
import ProductPage from './Product';

const PaymentLogic = ({ show, onHide, total, cartList }) => {
  const [formData, setFormData] = useState({
    name: '',
    matricNumber: '',
    amount: total,
    email: '',
    firstname: '',
    lastname: ''
  });

  console.log(cartList)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const payWithPaystack = (e) => {
    e.preventDefault();
    const paystack = new Paystackpop()
    paystack.newTransaction({
      key: 'pk_live_bfcec00387948c33e9b9a146735988ba0d67315f',
      amount: total,
      email: formData.email,
      firstname: formData.firstname,
      lastname: formData.lastname,
   
    })
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Your Invoice</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your First name"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter yourLast name"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMatricNumber">
            <Form.Label>Matric Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your matric number"
              name="matricNumber"
              value={formData.matricNumber}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAmount">
            <Form.Label>Total Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the total amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" onClick={payWithPaystack}>
            Make Payment
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default PaymentLogic;
