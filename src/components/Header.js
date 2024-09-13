import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = () => {
  const theme = useTheme(); // Access the theme
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is small (mobile)
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: theme.palette.background.default }}>
      <Toolbar sx={{backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)'}}>
        <Typography variant="h6" sx={{ flexGrow: 1, color: theme.palette.text.primary }}>
          My Portfolio
        </Typography>

        {isMobile ? (
          <>
            {/* Mobile Menu */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon sx={{ color: theme.palette.text.primary }} />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <List>
                {menuItems.map((item) => (
                  <ListItem
                    button
                    key={item.label}
                    component={Link}
                    to={item.to}
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText primary={item.label} sx={{ color: theme.palette.text.primary }} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          // Desktop Menu
          <>
            {menuItems.map((item) => (
              <Button
                color="inherit"
                component={Link}
                to={item.to}
                key={item.label}
                sx={{ color: theme.palette.text.primary }}
              >
                {item.label}
              </Button>
            ))}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
