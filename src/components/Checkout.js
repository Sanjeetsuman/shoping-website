import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems }) => {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // Handle the place order logic here
    alert('Your Order  placed successfully!');
    navigate('/');
  };

  return (
    <Box className="checkout-container">
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} secondary={`$${item.price.toFixed(2)}`} />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">
        Total: order.{cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
      </Typography>
      <Button variant="contained" color="primary" onClick={handlePlaceOrder}>
        Place Order
      </Button>
    </Box>
  );
};

export default Checkout;
