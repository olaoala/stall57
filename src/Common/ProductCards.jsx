import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styled from './Css/ProductCards.module.css';



const ProductCard = ({ product, addToCart }) => (

  <Card className={styled.card} >
    <Card.Img variant="top" className={styled.img} src={product.image} />
    <Card.Body>
      <Card.Title>{product.price}</Card.Title>
      <Card.Text>{product.description}</Card.Text>
      <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
    </Card.Body>
  </Card>
);



export default ProductCard;
