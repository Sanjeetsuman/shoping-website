import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Checkout from './components/Checkout';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  return (
    <Router>
      <CssBaseline />
      <Header />
      <Container component="main" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
