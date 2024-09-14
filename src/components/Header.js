import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = ({ toggleDarkMode, darkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ];

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position={scrolled ? 'sticky' : 'absolute'} // Switch between 'absolute' and 'sticky'
      sx={{
        top: scrolled ? '10px' : '0px', // Add margin at the top when scrolled
        backgroundColor: theme.palette.mode === 'dark'
          ? 'rgba(26, 32, 44, 0.9)'  // Dark mode with transparency
          : 'rgba(255, 255, 255, 0.9)', // Light mode with transparency
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        transition: 'top 0.3s ease, width 0.3s ease, border-radius 0.3s ease',
        width: scrolled ? '90%' : '100%', // Reduce width when scrolled
        borderRadius: scrolled ? '20px' : '0px', // Apply borderRadius when scrolled
        left: 0,
        right: 0,
        margin: 'auto', // Center the header
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: { xs: '0 1rem', sm: '0 2rem' } }} style={{color: theme.palette.mode === 'dark' ? '#59EBCB' : '#2C3F50'}}>
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            color: theme.palette.text.primary,
            fontSize: { xs: '1.2rem', sm: '1.5rem' },
            cursor: 'pointer',
            '&:hover': {
              color: theme.palette.primary.main,
            },
          }}
        >
          My Portfolio
        </Typography>

        {/* Switch Theme Button */}
        <IconButton
          sx={{ marginLeft: 'auto' }}
          onClick={toggleDarkMode}
          color="inherit"
        >
          <Typography variant="body2" style={{ marginRight: '5px' }}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Typography>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon sx={{ color: theme.palette.text.primary }} />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <List
                sx={{
                  width: 250,
                  backgroundColor: theme.palette.background.default,
                  height: '100%',
                }}
              >
                {menuItems.map((item) => (
                  <ListItem
                    button
                    key={item.label}
                    component={Link}
                    to={item.to}
                    onClick={toggleDrawer(false)}
                    sx={{
                      padding: '10px 20px',
                      '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      sx={{ color: theme.palette.text.primary, fontWeight: 'bold' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <div>
            {menuItems.map((item) => (
              <Button
                color="inherit"
                component={Link}
                to={item.to}
                key={item.label}
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 'bold',
                  marginRight: '15px',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
