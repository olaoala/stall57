import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../Common/ProductCards';
import CatList from '../Common/CategoryList' 
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
import SilverJ from '../Assets/j1.jpg'
import HeartRing from '../Assets/j2.jpg'
import GoldRing from '../Assets/j3.jpg'
import SaintCrucifix from '../Assets/j4.jpg'
import CloverChain from '../Assets/j5.jpg'
import CloverRing from '../Assets/j6.jpg'
import AbtractEarring from '../Assets/j7.jpg'
import SilverTriangle from '../Assets/j8.jpg'
import LilCrossChain from '../Assets/j9.jpg'
import GoldL from '../Assets/j10.jpg'
import GoldCrecent from '../Assets/j11.jpg'
import HollowHeart from '../Assets/j12.jpg'
import BallsChain from '../Assets/j13.jpg'
import ButterflyChain from '../Assets/j14.jpg'
import GoldHeart from '../Assets/j15.jpg'
import PearlHeart from '../Assets/j16.jpg'
import GoldRuffle from '../Assets/j17.jpg'
import HeartEarring from '../Assets/j18.jpg'
import HeartDangRing from '../Assets/j19.jpg'
import CubanInsp from '../Assets/j20.jpg'
import CirlesRing from '../Assets/j21.jpg'
import BowRing from '../Assets/j22.jpg'
import BoldGold from '../Assets/j23.jpg'
import SilverHeart from '../Assets/j24.jpg'
import HeartBangle from '../Assets/j25.jpg'
import SilverCrusifix from '../Assets/j26.jpg'
import WaveyBangle from '../Assets/j27.jpg'
import SwordCrucifix from '../Assets/j28.jpg'
import BallChain from '../Assets/j29.jpg'
import Waveystar from '../Assets/j30.jpg'
import KeyChain from '../Assets/j31.jpg'
import TwistBR from '../Assets/j32.jpg'
import DropletBR from '../Assets/j33.jpg'
import Silver3Ring from '../Assets/j34.jpg'
import SSRing from '../Assets/j35.jpg'
import SilverTwistRing from '../Assets/j37.jpg'
import Silver5Ring from '../Assets/j38.jpg'
import SilverRing from '../Assets/j39.jpg'
import PearlRing from '../Assets/j40.jpg'
import SilerStarChain from '../Assets/j41.jpg'
import Silveranklet from '../Assets/j42.jpg'




  
  const ProductPage = ({}) => {

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
          },
          {
            id: 14,
            image: HeartEarring,
            price: '4500',
            description: 'Heart Earrings',
            categoryId : 1,
            quantity:1
          },
          {
            id: 15,
            image: GoldCrecent,
            price: '2500',
            description: 'Crecent Earrings',
            categoryId : 1,
            quantity:1
          },
          {
            id: 16,
            image: GoldHeart,
            price: '4500',
            description: 'Gold Heart Necklace',
            categoryId : 1,
            quantity:1
          },
          {
            id: 17,
            image: GoldL,
            price: '4000',
            description: 'Golden L Earrings',
            categoryId : 1,
            quantity:1
          },
          {
            id: 18,
            image: GoldRing,
            price: '3000',
            description: 'Gold Rope Ring',
            categoryId : 1,
            quantity:1
          }, 
          {
            id: 19,
            image: GoldRuffle,
            price: '5000',
            description: 'Ruffle Earrings',
            categoryId : 1,
            quantity:1
          },
          {
            id: 20,
            image: SilerStarChain,
            price: '4000',
            description: 'Star Chain',
            categoryId : 1,
            quantity:1
          },
          {
            id: 21,
            image: SilverHeart,
            price: '4500',
            description: 'Silver Heart Necklace',
            categoryId : 1,
            quantity:1
          },
          {
            id: 22,
            image: SilverCrusifix,
            price: '5000',
            description: 'Silver Cross',
            categoryId : 1,
            quantity:1
          },
          {
            id: 23,
            image: SilverJ,
            price: '4000',
            description: 'J Earrings',
            categoryId : 1,
            quantity:1
          },
          {
            id: 24,
            image: HeartRing,
            price: '4000',
            description: 'Heart Ring',
            categoryId : 1,
            quantity:1
          },
          {
            id: 25,
            image: HeartBangle,
            price: '4500',
            description: 'Silver Heart Bangle',
            categoryId : 1,
            quantity:1
          },
          {
            id: 26,
            image: HeartDangRing,
            price: '2500',
            description: 'Heart Ring',
            categoryId : 1,
            quantity:1
          },
          {
            id: 27,
            image: SaintCrucifix,
            price: '4000',
            description: 'Saint Necklace',
            categoryId : 1,
            quantity:1
          },
          {
            id: 28,
            image: CloverChain,
            price: '4500',
            description: 'Clover Necklace',
            categoryId : 1,
            quantity:1
          },
          {
            id: 29,
            image: CloverRing,
            price: '3000',
            description: 'Clover Ring',
            categoryId : 1,
            quantity:1
          },
          {
            id: 30,
            image: AbtractEarring,
            price: '4500',
            description: 'Abstract  Earing',
            categoryId : 1,
            quantity:1
          },
          {
            id: 31,
            image: SilverTriangle,
            price: '4000',
            description: 'Silver Triangle',
            categoryId : 1,
            quantity:1
          },
          {
            id: 32,
            image: LilCrossChain,
            price: '4000',
            description: 'Cross Necklace',
            categoryId : 1,
            quantity:1
          },
          {
            id: 33,
            image: HollowHeart,
            price: '4000',
            description: 'Hollow Heart',
            categoryId : 1,
            quantity:1
          },
          {
            id: 34,
            image: BallChain,
            price: '4000',
            description: 'Ball Necklace',
            categoryId : 1,
            quantity:1
          },
          {
            id: 35,
            image: ButterflyChain,
            price: '4000',
            description: 'ButterFly Necklace',
            categoryId : 1,
            quantity:1
          },
          {
            id: 36,
            image: PearlHeart,
            price: '4500',
            description: 'Pearl Heart',
            categoryId : 1,
            quantity:1
          },
          {
            id: 37,
            image: CubanInsp,
            price: '3000',
            description: 'Cuban Style Ring',
            categoryId : 1,
            quantity:1
          },
          {
            id: 38,
            image: CirlesRing,
            price: '3000',
            description: 'Gold Cirles',
            categoryId : 1,
            quantity:1
          },
          {
            id: 39,
            image: BowRing,
            price: '2500',
            description: 'Bow Ring',
            categoryId : 1,
            quantity:1
          },
          {
            id: 40,
            image: BoldGold,
            price: '4500',
            description: 'Bold Gold',
            categoryId : 1,
            quantity:1
          },
          {
            id: 41,
            image: WaveyBangle,
            price: '4500',
            description: 'Wavey Bangle',
            categoryId : 1,
            quantity:1
          },
          {
            id: 42,
            image: SwordCrucifix,
            price: '4500',
            description: 'Sword Cross',
            categoryId : 1,
            quantity:1
          },
          {
            id: 43,
            image: BallsChain,
            price: '4500',
            description: '5-balls',
            categoryId : 1,
            quantity:1
          },
          {
            id: 44,
            image: Waveystar,
            price: '4500',
            description: 'Wavey Star',
            categoryId : 1,
            quantity:1
          },
          {
            id: 45,
            image: KeyChain,
            price: '4500',
            description: 'Key Necklace',
            categoryId : 1,
            quantity:1
          },
          {
            id: 46,
            image: TwistBR,
            price: '4000',
            description: 'Twist Bracelet',
            categoryId : 1,
            quantity:1
          },
          {
            id: 47,
            image: DropletBR,
            price: '4000',
            description: 'Droplets Bracelet',
            categoryId : 1,
            quantity:1
          },
          {
            id: 48,
            image: Silver3Ring,
            price: '3500',
            description: '3-Layer Ring',
            categoryId : 1,
            quantity:1
          },
          {
            id: 49,
            image: SilverTwistRing,
            price: '4000',
            description: 'Silver Twist Ring',
            categoryId : 1,
            quantity:1
          },
          {
            id: 50,
            image: Silver5Ring,
            price: '4000',
            description: '5-layer Ring',
            categoryId : 1,
            quantity:1
          },
          {
            id: 51,
            image: SilverRing,
            price: '4000',
            description: 'Simple Silver',
            categoryId : 1,
            quantity:1
          },
          {
            id: 52,
            image: PearlRing,
            price: '3500',
            description: 'Pearl Rong',
            categoryId : 1,
            quantity:1
          },
          {
            id: 53,
            image: Silveranklet,
            price: '3500',
            description: 'Silver Anklet',
            categoryId : 1,
            quantity:1
          },

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

    const productsPerPage = 12; 
    const totalPages = Math.ceil(products.length / productsPerPage);
    const currentProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
  
    const changePage = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    const updateCartInfo = (newCart) => {
      setExistingCart(newCart);
      const uniqueItemCount = Object.keys(newCart).length;
      setCartCount(uniqueItemCount);
    };
    // const updateProducts = (productId) => {
    //   setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
    // };
  
    return (
      <div>
      <Row style={{padding:'1em', textDecorationLine:'none'}} className="justify-content-center">

          {categories.map((category, id) => (
            <Col key={category.id} className="d-flex justify-content-center">
              <CatList category={category} />
            </Col>
          ))}
        </Row>
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
              <ProductCard product={product} addToCart={addToCart} />
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