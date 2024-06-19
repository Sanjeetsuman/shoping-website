import React from 'react';
import { Typography, List, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import '../styles.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Box className="cart-container">
      <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
      <List>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))}
      </List>
      <Typography variant="h6">
        Total: order{cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
      </Typography>
      <Button variant="contained" color="primary" onClick={handleCheckout}>
        Checkout
      </Button>
    </Box>
  );
};

export default Cart;
