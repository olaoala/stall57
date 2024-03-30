import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const AboutUsPage = () => (
  <footer className="footer mt-auto py-3 bg-light">
    <Container>
      <Row>
        <Col md={6}>
          <h5>About Us</h5>
          <p>
            We are a company dedicated to providing the best products and services. Our team is composed of talented individuals who share a common goal of excellence.
          </p>
        </Col>
        <Col md={6}>
          <h5>Contact Us</h5>
          <p>
            Email: info@ourcompany.com <br />
            Phone: (123) 456-7890
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default AboutUsPage;
