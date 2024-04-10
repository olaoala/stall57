import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Pages/Landing.jsx';
import ProductPage from './Pages/Product.jsx';
import AboutUsPage from './Pages/Contact.jsx';

function App() {
  return (
    <Router>
      <LandingPage/>
      <Routes>
      {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/category/:category" element={<ProductPage />} />
        {/* <Route path="/about" element={<AboutUsPage />} /> */}
        
      </Routes>

    </Router>
  );
}

export default App;
