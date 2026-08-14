import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Brightness4, Brightness7, Menu as MenuIcon } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { tokens } from '../../theme/tokens';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
];

export function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkStyle = {
    color: theme.palette.text.primary,
    fontWeight: 600,
    marginRight: '16px',
    textDecoration: 'none',
    transition: `color ${tokens.motion.normal} ease`,
    '&:hover': { color: theme.palette.primary.main },
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar
      position={scrolled ? 'fixed' : 'absolute'}
      sx={{
        top: scrolled ? '10px' : 0,
        left: 0,
        right: 0,
        margin: 'auto',
        width: scrolled ? { xs: '100%', sm: '90%' } : '100%',
        borderRadius: scrolled ? '20px' : 0,
        backgroundColor: darkMode
          ? tokens.colors.dark.surfaceGlass
          : tokens.colors.light.surfaceGlass,
        backdropFilter: 'blur(10px)',
        boxShadow: tokens.shadows.header,
        transition: `top ${tokens.motion.normal} ease, width ${tokens.motion.normal} ease, border-radius ${tokens.motion.normal} ease`,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: { xs: '0 1rem', sm: '0 2rem' },
        }}
      >
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            color: theme.palette.text.primary,
            textDecoration: 'none',
            fontSize: { xs: '1.2rem', sm: '1.5rem' },
            '&:hover': { color: theme.palette.primary.main },
          }}
        >
          Amogh Phadnis
        </Typography>

        <Box display="flex" alignItems="center" gap={1}>
          <IconButton onClick={toggleDarkMode} color="inherit" size="small" aria-label="toggle theme">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {isMobile ? (
            <>
              <IconButton onClick={() => setMobileOpen(!mobileOpen)} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              {mobileOpen && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '100%',
                    right: 16,
                    mt: 1,
                    p: 2,
                    borderRadius: tokens.radius.card,
                    backgroundColor: theme.palette.background.paper,
                    boxShadow: tokens.shadows.card,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    zIndex: 1300,
                  }}
                >
                  {navItems.map((item) => (
                    <Button
                      key={item.to}
                      component={Link}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      sx={{
                        ...linkStyle,
                        justifyContent: 'flex-start',
                        fontWeight: isActive(item.to) ? 700 : 600,
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
              )}
            </>
          ) : (
            <Box>
              {navItems.map((item) => (
                <Button
                  key={item.to}
                  component={Link}
                  to={item.to}
                  sx={{
                    ...linkStyle,
                    fontWeight: isActive(item.to) ? 700 : 600,
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
