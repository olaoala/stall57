// ReceiptModal.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ReceiptModal = ({ show, onHide, existingCart }) => {
  const [items, setItems] = useState(existingCart);


  // const totalPrice = Object.values(existingCart).reduce(
  //   (total, item) =>  total + item.price,
  //   0
  // );

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
  };
  
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Receipt</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {Object.values(existingCart).map((item) => (
          <div>
      <div style={{padding: '5px', display:'flex'}} key={item.id}>
            <img style={{height:'50px', width: '50px', margin:'5px'}} src={item.image}alt="" />
           <p >
           {item.description} <br />
            Price: {item.price}
            </p> 
          
            </div>
              <div style={{display:'flex', justifyItems:'left'}}>
              <Button variant="primary" onClick={() => handleRemoveItem(item.id)}>Remove</Button>
              <div style={{display:'flex', padding:"0em 0em 0em 10em"}}>
              <Button variant="primary" onClick={() => handleAdjustQuantity(item.id, item.quantity + 1)}>+</Button>
                <span>{item.quantity}</span>
              <Button variant="primary" onClick={() => handleAdjustQuantity(item.id, item.quantity - 1)}>-</Button>
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
