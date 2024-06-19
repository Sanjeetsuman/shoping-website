import React from 'react';
import { Typography, Container } from '@mui/material';

const About = () => (
  <Container sx={{ mt: 4, mb: 4 }}>
    <Typography variant="h4" gutterBottom>About Us</Typography>
    <Typography variant="body1" paragraph>
      This is the About Us section. Here you can add some information about your company, your mission, values, and any other relevant information that you want your visitors to know.
    </Typography>
    <Typography variant="body1" paragraph>
      Add more details here as needed to give a comprehensive overview of your business.
    </Typography>
  </Container>
);

export default About;
