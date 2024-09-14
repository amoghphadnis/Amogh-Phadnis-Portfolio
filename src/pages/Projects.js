import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Divider } from '@mui/material';
import Media from '../components/Character3D'; // Import the Media component for images

const Projects = () => {
  return (
    <Container style={{ marginTop: '50px' }}>
      {/* Header Section */}
      <Typography variant="h3" align="left" gutterBottom>
        Projects
      </Typography>

      {/* Project 1: Employee Management System */}
      <Divider style={{ marginTop: 40, marginBottom: 20 }} />
      <Card style={{ marginBottom: 20, background: 'transparent', boxShadow: 'none' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4">Employee Management System (EMS)</Typography>
              <Typography variant="body1" style={{ marginTop: 10 }}>
                A full-stack application built to manage employee data, featuring secure CRUD operations, an admin portal, and a system to track upcoming retirements.
              </Typography>
              <Typography variant="h6" style={{ marginTop: 10 }}>Tech Stack Used:</Typography>
              <Typography variant="body2">
                React.js, Apollo Client (GraphQL), Node.js, Express, MongoDB, Material UI
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Use Media component to display image */}
              <Media characterType="EMS1" description="EMS System Screenshot 1" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Media characterType="EMS2" description="EMS System Screenshot 2" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Project 2: E-commerce Website for Gaming Accessories */}
      <Divider style={{ marginTop: 40, marginBottom: 20 }} />
      <Card style={{ marginBottom: 20, background: 'transparent', boxShadow: 'none' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4">E-commerce Website for Gaming Accessories</Typography>
              <Typography variant="body1" style={{ marginTop: 10 }}>
                An e-commerce platform built for selling gaming accessories, with features like cart management, real-time price calculation, and session persistence.
              </Typography>
              <Typography variant="h6" style={{ marginTop: 10 }}>Tech Stack Used:</Typography>
              <Typography variant="body2">
                PHP, MySQL, JavaScript, Bootstrap
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Use Media component to display image */}
              <Media characterType="GamingHomeDesktop" description="Gaming Home Desktop View" />
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Use Media component to display image */}
              <Media characterType="GamingCartDesktop" description="Gaming Cart Desktop View" />
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Use Media component to display image */}
              <Media characterType="GamingHomeMobile" description="Gaming Home Mobile View" />
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Use Media component to display image */}
              <Media characterType="GamingCartMobile" description="Gaming Cart Mobile View" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Project 3: Watch World */}
      <Divider style={{ marginTop: 40, marginBottom: 20 }} />
      <Card style={{ marginBottom: 20, background: 'transparent', boxShadow: 'none' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4">Watch World</Typography>
              <Typography variant="body1" style={{ marginTop: 10 }}>
                An online e-commerce platform designed for selling luxury watches, with an admin portal to manage products and categories.
              </Typography>
              <Typography variant="h6" style={{ marginTop: 10 }}>Tech Stack Used:</Typography>
              <Typography variant="body2">
                ASP.NET, C#, Microsoft SQL Server, Bootstrap
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Use Media component to display image */}
              <Media characterType="WatchAdmin" description="WatchWorld Admin Panel" />
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Use Media component to display image */}
              <Media characterType="WatchCart" description="WatchWorld Cart Page" />
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Use Media component to display image */}
              <Media characterType="WatchHome" description="WatchWorld Home Page" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Projects;
