import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutPage = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        About Us
      </Typography>
      <Typography>
        This is a small blog application built with React Router and Material UI.
      </Typography>
    </Container>
  );
};

export default AboutPage;