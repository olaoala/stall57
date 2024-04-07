// ReceiptModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ReceiptModal = ({ show, onHide, existingCart }) => {
  const existingCartArray = Object.values(existingCart);

  const [items, setItems] = useState(existingCartArray);
  const [quantity, setQuantity] = useState(1);


  const totalPrice = Object.values(existingCart).reduce((total, product) => {
    const priceWithoutDollarSign = parseFloat(product.price.replace('$', ''));
    return total + priceWithoutDollarSign;
  }, 0);

  const handleRemoveItem = (itemId) => {
    // Remove the item with the given itemId from the receipt
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const handleAdjustQuantity = (itemId, newQuantity) => {
    // Update the quantity of the item with the given itemId
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setItems(updatedItems);
    setQuantity(newQuantity);
  };
  
 
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Receipt</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {(existingCartArray).map((item) => (
          <div  key={item.id}>
            <div style={{padding: '5px', display:'flex'}}>
            <img style={{height:'50px', width: '50px', margin:'5px'}} src={item.image}alt="" />
           <p >
           {item.description} <br />
            Price: {item.price}
            </p> 
            </div>
              <div key={item.id} style={{display:'flex', justifyItems:'left', padding:'0em 0em 0em 1em'}}>
              <Button variant="danger" style={{fontSize:'.6em', height:'30px'}} onClick={() => handleRemoveItem(item.id)}>Remove</Button>
              <div style={{display:'flex', padding:"0em 0em 0em 10em"}}>
              <Button variant="primary" onClick={() => handleAdjustQuantity(item.id, quantity + 1)}>+</Button>
              {/* <span> {quantity}</span> */}
              <Button variant="primary" onClick={() => handleAdjustQuantity(item.id, quantity - 1)}>-</Button>
              </div>
            
              </div>
          </div>
    
            
        ))}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <p>Total: ${totalPrice}</p>
        </div>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReceiptModal;
