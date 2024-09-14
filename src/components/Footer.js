import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation to check the route
import { useTheme } from '@mui/material/styles';
import { Container, Typography, Grid, Link as MuiLink, Button, Fade, Divider } from '@mui/material';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import AmoghPhadnis from '../Upload/AmoghPhadnis.pdf';


const Footer = () => {
  const theme = useTheme();
  const location = useLocation(); // Get the current location (route)
  console.log("Current route:", location.pathname);

  return (
    <footer>
      <Container>

        {/* Conditionally hide the Call-to-Action section on the Contact page */}
        {location.pathname !== '/Contact' && (
          <div style={{ marginTop: 40 }}>
            <Fade in timeout={2000}>
              <div style={{ textAlign: 'center', marginTop: 20 }}>
                <Divider style={{ marginTop: 40 }}>
                  <Typography variant='h5' align="center" style={{ padding: '10px 0', fontWeight: 600 }}>
                    Get in Touch
                  </Typography>
                </Divider>
                <Button variant='contained' component={Link} to="/Contact" loading="lazy" style={{
                  background: theme.palette.mode === 'dark' ? 'linear-gradient(to right bottom, #0172AF, #74FEBD)' : 'linear-gradient(to right bottom, #0172AF, #74FEBD)',
                  color: theme.palette.mode === 'dark' ? '#000000' : '#000000',
                  borderRadius: 12,
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s',
                  padding: 10
                }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0px 6px 16px rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)';
                  }}>
                  Contact
                </Button>
              </div>
            </Fade>
          </div>
        )}

        <Grid container justifyContent="center" spacing={4} style={{ marginTop: 20 }}>
          {/* Social Media Icons */}
          <Grid item>
            <MuiLink href="mailto:amoghphadnis20@gmail.com" target="_blank"><BiLogoGmail style={{ fontSize: 40, color: '#D32F2F' }} /></MuiLink>
          </Grid>
          <Grid item>
            <MuiLink href="https://www.linkedin.com/in/amogh-anand-phadnis/" target="_blank"><FaLinkedin style={{ fontSize: 40, color: '#0077b5' }} /></MuiLink>
          </Grid>
          <Grid item>
            <MuiLink href="https://github.com/amoghphadnis" target="_blank"><FaGithub style={{ fontSize: 40, color: '#333' }} /></MuiLink>
          </Grid>
          <Grid item>
            <MuiLink href="https://www.instagram.com/amoghphadnis/" target="_blank"><FaInstagram style={{ fontSize: 40, color: '#e4405f' }} /></MuiLink>
          </Grid>
          <Grid item>
            <MuiLink href={AmoghPhadnis} download><FaFilePdf style={{ fontSize: 40, color: '#E8CF73' }} /></MuiLink>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center">
          © 2024 Amogh Anand Phadnis. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
