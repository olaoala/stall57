import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styled from './Css/ProductCards.module.css';
import {Link} from 'react-router-dom'



const ProductCard = ({ product, addToCart }) => (

  <Card className={styled.card} >
    <Card.Img variant="top" className={styled.img} src={product.image} />
    <Card.Body>
      <Card.Text>{product.description}</Card.Text>
      <Card.Title>{product.price}</Card.Title>

      <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
      {/* <Link to={{ pathname: ' https://wa.me/2349025794716' }}>
      <Button variant="primary" >Yass!! I want this</Button>
      </Link> */}


    </Card.Body>
  </Card>
);



export default ProductCard;
