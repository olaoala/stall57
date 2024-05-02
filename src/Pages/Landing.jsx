import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import NavBar from '../Common/Nav.jsx';
import { jello } from 'react-animations';
import 'animate.css';
import styles from './Css/Landing.module.css'
import gifts from '../Assets/gifts.jpeg'
import jewelry from '../Assets/jewelry.jpg'
import trinkets from '../Assets/trinkets.jpeg'
import intimates from '../Assets/intimates.jpeg'
import CatList from '../Common/CategoryList.jsx'


const jelloAnimation = keyframes`${jello}`;
 
const WobbleDiv = styled.div`
  animation: 1s ${jelloAnimation};
`;

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
const LandingPage = () => {
   
  return (
    <Container className={styles.container} fluid style={{backgroundAttachment:'fixed',backgroundRepeat: 'no-repeat' }}>
        <NavBar/>
      <Row >
        <WobbleDiv className=" text-center animate_animated animate__infinite">
        <Col className={styles.welcome}  style={{fontFamily:'bubble', color:'#FCF1F5', margin:'7em 0em 2em 0em'}}>
          <h1 style={{fontSize:'40px'}}>Welcome to Stall 66</h1>
          <h6>The everything stall</h6>
        </Col>
        </WobbleDiv>
      </Row>

      {/* <Row className="justify-content-center">
      <h6 className="text-center" style={{fontFamily:'scribble', color:'#FCF1F5', fontSize:"25px", marginBottom:'5em'}} >What would you like to get?</h6>

          {categories.map((category, id) => (
            <Col key={category.id} className="d-flex justify-content-center">
              <CatList category={category} />
            </Col>
          ))}
        </Row> */}
    </Container>
  );
};

export default LandingPage;
