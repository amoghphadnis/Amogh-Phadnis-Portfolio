import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Box, MenuItem } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    lookingFor: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // The ID below comes from the Google Form's "action" URL
    const formId = '1FAIpQLSf7PF7swnz-qMmXr0TrAVtySV4tYyWSmNnDvV0jvHXNx0y5AA';

    // These are the field entry IDs from Google Form
    const fieldMapping = {
      name: 'entry.1943477224',
      email: 'entry.1087665743',
      lookingFor: 'entry.1042767116', // Correct entry ID for the "What are you looking for?" field
      message: 'entry.1885315504',
    };

    const formUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

    const formBody = new FormData();
    formBody.append(fieldMapping.name, formData.name);
    formBody.append(fieldMapping.email, formData.email);
    formBody.append(fieldMapping.lookingFor, formData.lookingFor);
    formBody.append(fieldMapping.message, formData.message);


    fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: formBody,
    })
      .then(() => {
        alert('Thank you for reaching out! Amogh will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          lookingFor: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <Container style={{ marginTop: '50px' }}>
      {/* Page Title */}
      <Typography variant="h3" align="left" gutterBottom>
        Contact Me
      </Typography>

      {/* Contact Information */}
      <Typography variant="body1" align="left" gutterBottom>
        Feel free to reach out to me for any opportunities or inquiries! Fill in the form below to get in touch.
      </Typography>

      {/* Custom Form */}
      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          Send a Message
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                name="name"
                variant="outlined"
                fullWidth
                required
                value={formData.name}
                onChange={handleChange}
                sx={{backdropFilter: 'blur(30px)', boxShadow:'0px 0px 30px rgba(227,228,237,0.37)'}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                required
                value={formData.email}
                onChange={handleChange}
                sx={{backdropFilter: 'blur(30px)', boxShadow:'0px 0px 30px rgba(227,228,237,0.37)'}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                label="What are you looking for?"
                name="lookingFor"
                variant="outlined"
                fullWidth
                required
                value={formData.lookingFor}
                onChange={handleChange}
                sx={{backdropFilter: 'blur(30px)', boxShadow:'0px 0px 30px rgba(227,228,237,0.37)'}}
              >
                <MenuItem value="Website Development">Website Development</MenuItem>
                <MenuItem value="Website Design">Website Design</MenuItem>
                <MenuItem value="Web Application">Web Application</MenuItem>
                <MenuItem value="Android Application">Android Application</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                name="message"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                sx={{backdropFilter: 'blur(30px)', boxShadow:'0px 0px 30px rgba(227,228,237,0.37)'}}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth color="primary">
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Contact;
