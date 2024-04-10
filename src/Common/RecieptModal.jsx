// ReceiptModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Button,Col } from 'react-bootstrap';
import PaymentLogic from '../Pages/Payment.jsx'

const ReceiptModal = ({ show, onHide, existingCart, setExistingCart, setCartCount }) => {
  // const existingCartArray = Object.values(existingCart);
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    // Convert existingCart object into an array of values
    const cartItems = Object.values(existingCart);
    setItems(cartItems);
  }, [existingCart]);

  // const [quantity, setQuantity] = useState(1);



  const totalPrice = items.reduce((total, product) => {
    const priceWithoutDollarSign = parseFloat(product.price.replace('$', ''));
    return total + priceWithoutDollarSign;
  }, 0);


  const handleRemoveItem = (itemId) => {
    setExistingCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[itemId];
      return updatedCart;
    });
    setCartCount((prevCount) => prevCount - 1);
  };


  

useEffect(() => {
    console.log(items);
}, [items]);

// const sendShoppingListToWhatsApp = (items) => {
//   // Ensure items is an array
//   const shoppingList = Array.isArray(items) ? items : [];
//   console.log(shoppingList);

//   // Calculate total amount
//   const totalAmount = totalPrice

//   // Construct message
//   const itemlist = shoppingList.map(item => `-${item.description} :${item.price}`).join('\n');
//   // const itemPrice = shoppingList.map(item => `${item.price}`).join('\n');

//   const message = `Hello Wuranimi, I would like to preorder '\n' ${itemlist} '\n' Total: ${totalAmount}`;

//   const whatsappURL = `https://wa.me/+2349025794716?text=${encodeURIComponent(message)}`;

//   // Open WhatsApp link
//   window.open(whatsappURL, '_blank');
//   console.log(whatsappURL);
// };


  return (
    
    <Modal show={show} onHide={onHide} >
      <Modal.Header closeButton>
        <Modal.Title>Your Invoice</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {items.map((item) => (
          <div  key={item.id}>
            <div style={{padding: '5px', display:'flex'}}>
            <img style={{height:'50px', width: '50px', margin:'5px'}} src={item.image}alt="" />
           <p >
           {item.description} <br />
            Price: {item.price}
            </p> 
            <Button variant="danger" style={{ margin:'0em 1em 0em 14em',fontSize:'.6em', height:'30px'}} onClick={() => handleRemoveItem(item.id)}>Remove</Button>

            </div>
              
          </div>
    
            
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Col className='d-flex justify-content-between'>
          <p>Total: ${totalPrice}</p>
         
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Order Now
        </Button>
        <PaymentLogic
          show={showModal}
          onHide={() => setShowModal(false)}
          total={totalPrice}
          cartList={items}
      />

        </Col>

      </Modal.Footer>
    </Modal>
  );
};

export default ReceiptModal;
