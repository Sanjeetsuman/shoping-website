import React, { useState } from 'react';
import { Typography, Container, TextField, Button, Box, Alert } from '@mui/material';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = form;

    // Simple form validation
    if (!name || !email || !phone || !message) {
      setError('All fields are required.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/contact', { name, email, phone, message });
      setError('');
      setSubmitted(true);
      alert(`Message sent successfully!`);
      // Reset form
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    }
  };

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <Typography variant="body1" paragraph>
        Feel free to reach out to us using the form below.
      </Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {submitted && <Alert severity="success" sx={{ mb: 2 }}>Thank you for your message! We will get back to you soon.</Alert>}
      <Box component="form" sx={{ mt: 2 }} onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Your Name"
          name="name"
          margin="normal"
          variant="outlined"
          value={form.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Your Email"
          name="email"
          margin="normal"
          variant="outlined"
          value={form.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Your Phone"
          name="phone"
          margin="normal"
          variant="outlined"
          value={form.phone}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Your Message"
          name="message"
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
          value={form.message}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }} type="submit">
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
