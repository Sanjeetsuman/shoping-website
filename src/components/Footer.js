import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';
import '../styles.css';

const Footer = () => (
  <Box component="footer" className="footer">
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">Sajal Infotech </Typography>
          <Typography variant="body2">
            1234 Street Address<br />
            5th Street Saraswthi Nagar , Avadi ,Chennai,Tamil Nadu<br />
            India
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">Contact Us</Typography>
          <Typography variant="body2">
            Phone: 9693392925<br />
            Email: sanjeet12@company.com
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">Follow Us</Typography>
          <Link href="#" color="inherit" variant="body2">
            Facebook
          </Link><br />
          <Link href="#" color="inherit" variant="body2">
            Twitter
          </Link><br />
          <Link href="#" color="inherit" variant="body2">
            LinkedIn
          </Link>
        </Grid>
      </Grid>
      <Box textAlign="center" marginTop={4}>
        <Typography variant="body2">© 2024 Your Company Name. All rights reserved.</Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
