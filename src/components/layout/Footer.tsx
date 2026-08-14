import { Container, Typography, Grid, IconButton, Box, Button, Fade, Divider } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa6';
import { BiLogoGmail } from 'react-icons/bi';
import { profile } from '../../data/profile';
import { tokens } from '../../theme/tokens';

export function Footer() {
  const location = useLocation();
  const onContact = location.pathname === '/contact';

  const socialLinks = [
    { href: `mailto:${profile.email}`, icon: BiLogoGmail, color: '#D32F2F', label: 'Gmail' },
    { href: profile.linkedInUrl, icon: FaLinkedin, color: '#0077b5', label: 'LinkedIn' },
    { href: profile.githubUrl, icon: FaGithub, color: '#333', label: 'GitHub' },
    { href: profile.instagramUrl, icon: FaInstagram, color: '#e4405f', label: 'Instagram' },
    { href: profile.resumeUrl, icon: FaFilePdf, color: '#E8CF73', label: 'Resume', download: true },
  ];

  return (
    <Box component="footer" sx={{ mt: 'auto', py: 4 }}>
      <Container>
        {!onContact && (
          <Fade in timeout={1000}>
            <Box textAlign="center" mb={4}>
              <Divider sx={{ my: 3 }}>
                <Typography variant="h4" sx={{ fontSize: '1.75rem', fontWeight: 600 }}>
                  Get in Touch
                </Typography>
              </Divider>
              <Button
                variant="contained"
                component={Link}
                to="/contact"
                sx={{
                  background: tokens.colors.accent.gradient,
                  color: tokens.colors.accent.black,
                  borderRadius: tokens.radius.button,
                  px: 3,
                  py: 1.5,
                  boxShadow: tokens.shadows.card,
                  '&:hover': { transform: 'scale(1.05)', boxShadow: tokens.shadows.cardHover },
                  transition: `transform ${tokens.motion.normal} ${tokens.motion.hoverEasing}`,
                }}
              >
                Contact
              </Button>
            </Box>
          </Fade>
        )}

        <Grid container justifyContent="center" spacing={3} mb={2}>
          {socialLinks.map((link) => (
            <Grid item key={link.label}>
              <IconButton
                component="a"
                href={link.href}
                aria-label={link.label}
                target={link.download ? undefined : '_blank'}
                download={link.download ? 'AmoghPhadnis.pdf' : undefined}
                rel={link.download ? undefined : 'noopener noreferrer'}
                sx={{ color: link.color, fontSize: '2.5rem', p: 1 }}
              >
                <link.icon />
              </IconButton>
            </Grid>
          ))}
        </Grid>

        <Typography variant="body2" align="center" color="text.secondary">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
