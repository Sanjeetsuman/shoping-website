import React from 'react';
import Product from './Product';
import { Grid } from '@mui/material';

const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: 'https://plus.unsplash.com/premium_photo-1683147723641-27d06a2eb199?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'Product 2', price: 49.99, image: 'https://images.unsplash.com/photo-1489348611450-4c0d746d949b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Product 3', price: 19.99, image: 'https://images.unsplash.com/photo-1580638858617-ed8f4c3fa6d7?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

  { id: 1, name: 'Product 4', price: 22.99, image: 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?q=80&w=1822&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'Product 5', price: 45.99, image: 'https://images.unsplash.com/photo-1562280963-8a5475740a10?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Product 6', price: 85.99, image: 'https://images.unsplash.com/photo-1562215179-0a90df38953a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 1, name: 'Product 7', price: 52.99, image: 'https://images.unsplash.com/photo-1562280963-8a5475740a10?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'Product 8', price: 66.99, image: 'https://images.unsplash.com/photo-1562281207-59e9d65b3414?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Product 9', price: 33.99, image: 'https://plus.unsplash.com/premium_photo-1714226832704-89fca6fe064b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const ProductList = ({ addToCart }) => (
  <Grid container spacing={4}>
    {products.map(product => (
      <Grid item key={product.id} xs={12} sm={6} md={4}>
        <Product product={product} addToCart={addToCart} />
      </Grid>
    ))}
  </Grid>
);

export default ProductList;
