import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/motion/FadeIn';
import { SEO } from '../components/common/SEO';

export function NotFound() {
  return (
    <>
      <SEO title="Page Not Found — Amogh Anand Phadnis" description="The requested page could not be found." />

      <Container maxWidth="lg" sx={{ pt: { xs: 10, sm: 14 }, pb: 6, textAlign: 'center' }}>
        <FadeIn>
          <Typography variant="h1" sx={{ fontSize: '4rem', fontWeight: 700, mb: 2 }}>
            404
          </Typography>
          <Typography variant="h2" sx={{ fontSize: '1.75rem', fontWeight: 600, mb: 3 }}>
            Page not found
          </Typography>
          <Button component={Link} to="/" variant="contained" size="large">
            Back to Home
          </Button>
        </FadeIn>
      </Container>
    </>
  );
}
