import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Shopping Page
      </Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/about">About</Button>
      <Button color="inherit" component={Link} to="/contact">Contact</Button>
      <Button color="inherit" component={Link} to="/cart">Cart</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
