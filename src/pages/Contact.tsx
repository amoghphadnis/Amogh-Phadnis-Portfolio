import { Container, Typography, Box, Button, Link as MuiLink } from '@mui/material';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { profile } from '../data/profile';
import { FadeIn } from '../components/motion/FadeIn';
import { SEO } from '../components/common/SEO';
import { tokens } from '../theme/tokens';

export function Contact() {
  return (
    <>
      <SEO
        title="Contact — Amogh Anand Phadnis"
        description="Get in touch with Amogh Phadnis for software development, enterprise systems, and engineering opportunities."
      />

      <Container maxWidth="md" sx={{ pt: { xs: 10, sm: 14 }, pb: 6, textAlign: 'center' }}>
        <FadeIn>
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', sm: '2.5rem' }, fontWeight: 700, mb: 2 }}>
            Get in Touch
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            I am open to software engineering roles, consulting opportunities, and discussions about enterprise systems, manufacturing software, and workflow automation.
          </Typography>

          <Box display="flex" flexDirection="column" gap={2} alignItems="center" mt={4}>
            <Button
              variant="contained"
              href={`mailto:${profile.email}`}
              startIcon={<BiLogoGmail />}
              sx={{
                background: tokens.colors.accent.gradient,
                color: tokens.colors.accent.black,
                borderRadius: tokens.radius.button,
                px: 4,
                py: 1.5,
                fontWeight: 700,
                boxShadow: tokens.shadows.card,
                '&:hover': { transform: 'scale(1.05)', boxShadow: tokens.shadows.cardHover },
                transition: `transform ${tokens.motion.normal} ease`,
              }}
            >
              {profile.email}
            </Button>

            <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">
              <MuiLink
                href={profile.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                display="flex"
                alignItems="center"
                gap={0.5}
                color="text.primary"
              >
                <FaLinkedin /> LinkedIn
              </MuiLink>
              <MuiLink
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                display="flex"
                alignItems="center"
                gap={0.5}
                color="text.primary"
              >
                <FaGithub /> GitHub
              </MuiLink>
            </Box>
          </Box>
        </FadeIn>
      </Container>
    </>
  );
}
