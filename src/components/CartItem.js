import React from 'react';
import { ListItem, ListItemText, Button } from '@mui/material';
import '../styles.css';

const CartItem = ({ item, removeFromCart }) => (
  <ListItem className="cart-item">
    <ListItemText primary={item.name} secondary={`$${item.price.toFixed(2)}`} />
    <Button variant="contained" color="secondary" onClick={() => removeFromCart(item)}>
      Remove
    </Button>
  </ListItem>
);

export default CartItem;
