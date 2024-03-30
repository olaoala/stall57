import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Pages/Landing';
import ProductPage from './Pages/Product';
import AboutUsPage from './Pages/Contact';

function App() {
  return (
    <Router>
      <LandingPage/>


      <Routes>
        <Route path="/category/:category" element={<ProductPage />} />
        {/* <Route path="/about" element={<AboutUsPage />} /> */}
        
      </Routes>

    </Router>
  );
}

export default App;
