import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../Common/ProductCards';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import jewelry from '../Assets/jewelry.jpg'
import intimates from '../Assets/intimates.jpeg'
import { v4 as uuidv4 } from 'uuid';
import ReceiptModal from '../Common/RecieptModal'; 
import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from "react-icons/fa";
import styled from './Css/Product.module.css';
import BlueDreams from '../Assets/pj1.jpg';
import WineDreams from '../Assets/pj2.jpg';
import BlackDreams from '../Assets/pj3.jpg';
import BlueBBgirl from '../Assets/pj14.jpg';
import BrownHoney from '../Assets/pj12.jpg';
import WaterMelon from '../Assets/pj8.jpg';
import BeigeCamo from '../Assets/pj6.jpg';
import PinkButterfly from '../Assets/pj13.jpg';
import Strawberry from '../Assets/pj15.jpg';
import BlueNights from '../Assets/pj10.jpg';
import HeartChecked from '../Assets/pj9.jpg';
import Hallow from '../Assets/pj7.jpg';
import PurpleBBgirl from '../Assets/pj5.jpg';





  
  const ProductPage = () => {

    const sessionId = uuidv4();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [catName, setCatName] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [showModal, setShowModal] = useState();
    const [existingCart, setExistingCart] = useState([]);
    const [items, setItems] = useState([]);



    const { category } = useParams();

    const categories = [
      {
        id: 1,
        image: jewelry,
        text: 'Jewelry by Wuranimi'
      },
      {
        id: 2,
        image: intimates,
        text: 'Intimates by Jojo Dreams'
      }
    
    ];
  
    const products = [
      {
        id: 1,
        image: BlueDreams,
        price: '6000',
        description: 'Blue Dreams (XL)',
        categoryId : 2,
        quantity:1
      },
      {
        id: 2,
        image: WineDreams,
        price: '6000',
        description: 'Wine Dreams (XL)',
        categoryId : 2,
        quantity:1

  
      },
      {
        id: 3,
        image: BlackDreams,
        price: '6000',
        description: 'Black Dreams(XL)',
        categoryId : 2,
        quantity:1

  
      },
      {
          id: 4,
          image: PurpleBBgirl,
          price: '6000',
          description: 'Purle Baby(L)',
          categoryId : 2,
          quantity:1

  
        },
        {
          id: 5,
          image: BlueBBgirl,
          price: '6000',
          description: 'Blue Baby(L)',
          categoryId : 2,
          quantity:1

  
        },
        {
          id: 6,
          image: Hallow,
          price: '6000',
          description: 'Halloweeny (XL)',
          categoryId : 2,
          quantity:1

  
        },
        {
          id: 7,
          image: BrownHoney,
          price: '6000',
          description: 'Brown Honey(L)',
          categoryId : 2,
          quantity:1

  
        },
        {
            id: 8,
            image: BlueNights,
            price: '6000',
            description: 'Blue Nights (XL)',
            categoryId : 2,
            quantity:1

          },
          {
            id: 9,
            image: Strawberry,
            price: '6000',
            description: 'Strawberry PJ(L)',
            categoryId : 2,
            quantity:1

          },
          {
            id: 10,
            image: PinkButterfly,
            price: '6000',
            description: 'Butterfly PJ (XL)',
            categoryId : 2,
            quantity:1

          },
          {
            id: 11,
            image: BeigeCamo,
            price: '6000',
            description: 'Biege Camo PJ(L)',
            categoryId : 2,
            quantity:1

          },
          {
            id: 12 ,
            image: WaterMelon,
            price: '6000',
            description: 'Watermelon PJ(L)',
            categoryId : 2,
            quantity:1
          },
          {
            id: 13,
            image: HeartChecked,
            price: '6000',
            description: 'Checkered Heart PJ(L)',
            categoryId : 2,
            quantity:1
          }
    ];
    const addToCart = (product, quantity) => {
      const sessionId = localStorage.getItem('sessionId') || uuidv4();
      const existingCartData = JSON.parse(sessionStorage.getItem('cart')) || {};
    
      if (existingCartData[product.id]) {
        existingCartData[product.id].quantity += quantity;
      } else {
        existingCartData[product.id] = {
          ...product,
          quantity,
        };
      }
 
      // Update both sessionStorage and localStorage
      sessionStorage.setItem('cart', JSON.stringify(existingCartData));
      localStorage.setItem(sessionId, JSON.stringify(existingCartData));
      localStorage.setItem('sessionId', sessionId);
    
      // Update cart count based on the number of unique items
      const uniqueItemCount = Object.keys(existingCartData).length;
      setCartCount(uniqueItemCount);
      setExistingCart(existingCartData)    
      console.log(existingCartData, uniqueItemCount);
    };
 
  useEffect(() => {
    setFilteredProducts(products.filter(product => product.categoryId  === Number(category)));
    // setCatName(categories.map((category,idx) => category.id === Number(category)));
  },[category]);
  useEffect(() => {
    console.log(existingCart); // Will show the updated value of existingCart
  }, [existingCart]);


  const categoryMap = categories.reduce((map, category) => {
    map[category.id] = category.text;
    return map;
  }, {});

  const categoryText = categoryMap[Number(category)];
    const [currentPage, setCurrentPage] = React.useState(1);
    const productsPerPage = 6; 
    const totalPages = Math.ceil(products.length / productsPerPage);
    const currentProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
  
    const changePage = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    return (
      <div>
      {/* <Row style={{padding:'1em', textDecorationLine:'none'}} className="justify-content-center">

          {categories.map((category, id) => (
            <Col key={category.id} className="d-flex justify-content-center">
              <CatList category={category} />
            </Col>
          ))}
        </Row> */}
      <Container>
      <Row style={{margin: '6em 0em 1em 0em' }}>
      <Col>
      <p style={{ fontFamily: 'bubble', color: '#EADCBD', float: 'left'}}>
          {categoryText}
        </p>
      </Col>
      <Col style={{float: 'right'}}>
      <Button variant="outline-secondary" onClick={() => setShowModal(true)} style={{ color: '#EADCBD', float: 'right'}}>
      
      <span className={styled.count}>{Number(cartCount)}</span>
    
          <FaShoppingCart />
        </Button>
        <ReceiptModal
  show={showModal}
  onHide={() => setShowModal(false)}
  existingCart={existingCart}
  setExistingCart={setExistingCart}
  setCartCount={setCartCount}
      />
      </Col>
      </Row>
    </Container>
        <Row className="justify-content-center">
          {currentProducts.map((product, idx) => (
            <Col sm={4} key={product.id} className="d-flex justify-content-center">
              <ProductCard product={product} addToCart={addToCart}/>
            </Col>
          ))}
        </Row>

        <Pagination className="justify-content-center">
          {[...Array(totalPages)].map((page, i) => 
            <Pagination.Item key={i} active={i + 1 === currentPage} onClick={() => changePage(i + 1)}>
              {i + 1}
            </Pagination.Item>
          )}
        </Pagination>

        {/* <AboutUsPage /> */}

      </div>
    );
  };
  
  export default ProductPage