import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function Nav() {
  return (
    <Navbar className="bg-body-light" style={{fontFamily:'bubble'}}>
      <Container>
        <Navbar.Brand href="#home" style={{ color:'#EADCBD'}}>STALL57</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Button variant="outline-secondary" style={{ color:'#EADCBD'}}>Preorder Now!</Button>{' '}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;