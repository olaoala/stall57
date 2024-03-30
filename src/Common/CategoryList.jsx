import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'animate.css';


const CatList = ({category}) => {
   
    return ( 
      <Link key={category} to={`/category/${category.id}`}>
        <div className="text-center">
        <Image  src={category.image} roundedCircle fluid style={{ width: '50px', height: '50px' }} />
          <p style={{fontFamily:'bubble', color:'#EADCBD', fontSize:'12px'}}>{category.text}</p>
        </div>
        </Link>

        );
};

export default CatList;
