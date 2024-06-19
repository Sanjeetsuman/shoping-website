import React, { useState } from 'react';
import { Card, CardContent, CardActions, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const CardMedia = styled('img')({
  width: '100%',
  height: 'auto',
  maxHeight: '200px', // Adjust this value as needed
});

const CardContentWrapper = styled(CardContent)({
  flexGrow: 1,
});

const CardActionsWrapper = styled(CardActions)({
  justifyContent: 'space-between',
});

const Product = ({ product, addToCart }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledCard>
      <CardMedia src={product.image} alt={product.name} />
      <CardContentWrapper>
        <Typography gutterBottom variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Rs.{product.price.toFixed(2)}
        </Typography>
      </CardContentWrapper>
      <CardActionsWrapper>
        <Button size="small" color="primary" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
        <Button size="small" color="secondary" onClick={handleClickOpen}>
          More
        </Button>
      </CardActionsWrapper>

      <Dialog open={open} onClose={handleClose} aria-labelledby="product-dialog-title">
        <DialogTitle id="product-dialog-title">{product.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Here are more details about the product.
          </DialogContentText>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
          <Typography variant="body1">
            This is a detailed description of {product.name}. It has a price of ${product.price.toFixed(2)}.
          </Typography>
          {/* Add more details as necessary */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </StyledCard>
  );
};

export default Product;
