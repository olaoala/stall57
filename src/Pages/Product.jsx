import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../Common/ProductCards';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import gifts from '../Assets/gifts.jpeg'
import jewelry from '../Assets/jewelry.jpg'
import trinkets from '../Assets/trinkets.jpeg'
import intimates from '../Assets/intimates.jpeg'
import AboutUsPage from '../Pages/Contact';


  
  const ProductPage = () => {

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
        text: 'Intimates by ...'
      },
      {
        id: 3,
        image: trinkets,
        text: 'Organised by Ilewura'
      },
      {
          id: 4,
          image: gifts,
          text: 'Gift Boxes'
        }
    ];
  
    const products = [
      {
        id: 1,
        image: jewelry,
        price: '$29.99',
        description: 'This is a great product.',
        categoryId : 4
      },
      {
        id: 2,
        image: jewelry,
        price: '$39.99',
        description: 'This product is even better.',
        categoryId : 3
  
      },
      {
        id: 3,
        image: jewelry,
        price: '$49.99',
        description: 'This is the best product.',
        categoryId : 1
  
      },
      {
          id: 4,
          image: jewelry,
          price: '$49.99',
          description: 'This is the best product.',
          categoryId : 1
  
        },
        {
          id: 5,
          image: jewelry,
          price: '$29.99',
          description: 'This is a great product.',
          categoryId : 2
  
        },
        {
          id: 6,
          image: jewelry,
          price: '$39.99',
          description: 'This product is even better.',
          categoryId : 2
  
        },
        {
          id: 7,
          image: jewelry,
          price: '$49.99',
          description: 'This is the best product.',
          categoryId : 3
  
        },
        {
            id: 8,
            image: jewelry,
            price: '$49.99',
            description: 'This is the best product.',
            categoryId : 4
          },
          {
            id: 9,
            image: jewelry,
            price: '$49.99',
            description: 'This is the best product.',
            categoryId : 4
          },
          {
            id: 10,
            image: jewelry,
            price: '$49.99',
            description: 'This is the best product.',
            categoryId : 4
          },
          {
            id: 11,
            image: jewelry,
            price: '$49.99',
            description: 'This is the best product.',
            categoryId : 4
          },
          {
            id: 12 ,
            image: jewelry,
            price: '$49.99',
            description: 'This is the best product.',
            categoryId : 1
          }
    ];
    const addToCart = (product) => {
      // Get the user's session ID
      const sessionId = window.sessionStorage.getItem('sessionId');
    
      // Get the current cart data from localStorage
      let cart = JSON.parse(localStorage.getItem(sessionId)) || {};
    
      // If the product is already in the cart, increment the quantity
      if (cart[product.id]) {
        cart[product.id].quantity += 1;
      } else {
        // Otherwise, add the product to the cart with a quantity of 1
        cart[product.id] = {
          ...product,
          quantity: 1
        };
      }
    
      // Save the updated cart data back to localStorage
      localStorage.setItem(sessionId, JSON.stringify(cart));
      console.log(cart, localStorage,sessionId)
    };
    


  const [filteredProducts, setFilteredProducts] = useState([]);
  const [catName, setCatName] = useState([]);


  useEffect(() => {
    setFilteredProducts(products.filter(product => product.categoryId  === Number(category)));
    // setCatName(categories.map((category,idx) => category.id === Number(category)));
  },[category]);

  const categoryMap = categories.reduce((map, category) => {
    map[category.id] = category.text;
    return map;
  }, {});

  const categoryText = categoryMap[Number(category)];

  

    const [currentPage, setCurrentPage] = React.useState(1);
    const productsPerPage = 6; 
    const totalPages = Math.ceil(products.length / productsPerPage);
    console.log(filteredProducts,Number(category))
    const currentProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
  
    const changePage = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    return (
      <div>
        <Row>
        <p style={{fontFamily:'bubble', color:'#EADCBD', margin:'2em 0em 2em 6em'}}>{categoryText}</p>

        </Row>
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

        <AboutUsPage />

      </div>
    );
  };
  
  export default ProductPage