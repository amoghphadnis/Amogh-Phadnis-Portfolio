import React from 'react';
import { Container, Typography, Avatar, List, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Amogh2 from '../Images/Amogh(2).jpg';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  background: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
}));

const About = () => {
  return (
    <Container>
      <Typography variant="h3" style={{ fontWeight: 'bold', marginTop: '2rem' }}>
        Amogh Anand Phadnis
      </Typography>
      <Box sx={{ flexGrow: 1, marginTop: '2rem', backdropFilter: 'blur(30px)' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Item>
              <Typography variant="h4">Introduction:</Typography>
              <Typography variant="body1">
                Hi, I'm Amogh Phadnis, a passionate web developer and technology enthusiast based in Kitchener, Ontario, Canada. With a strong background in software engineering, web development, and a flair for solving complex problems, I specialize in building scalable, user-friendly applications. Currently, I'm pursuing my studies at Conestoga College, sharpening my skills while working on innovative projects like Employee Management Systems and eCommerce solutions.
              </Typography>
              <Typography variant="body1" paragraph>
                With a deep understanding of HTML5, CSS3, JavaScript, and various JavaScript frameworks like React.js, I excel at transforming design mockups into high-quality code. My focus is on delivering clean, maintainable, and optimized solutions that improve user experience and increase client satisfaction. Whether I’m improving a website’s performance, implementing dynamic features with REST APIs, or working on state management with React, I bring a detail-oriented and problem-solving mindset to every project.
              </Typography>
              <Typography variant="body1" paragraph>
                Throughout my professional journey, I’ve had the opportunity to work on diverse projects across industries, from revamping websites to developing comprehensive employee management systems. My experience working at DGate Integrated Services allowed me to lead front-end development efforts, resulting in a 30% improvement in client satisfaction. I’ve also had the privilege of building full-stack solutions during my time as a Web Developer Intern at Accurate Time Pvt Ltd, where I boosted website performance and increased organic traffic.
              </Typography>
              <Typography variant="body1" paragraph>
                In addition to my technical expertise, I bring strong communication and team collaboration skills, ensuring that all stakeholders are aligned and that projects are delivered on time and within scope. My ability to adapt to new technologies and frameworks has enabled me to constantly grow and deliver high-quality solutions for both clients and personal projects.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item>
              <Avatar
                variant="square"
                alt="Amogh Phadnis"
                src={Amogh2}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '25px',
                  filter: 'drop-shadow(0px 2px 15px rgba(255,255,255,0.5))',
                }}
              />
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <List sx={{ backdropFilter: 'blur(30px)', boxShadow: '0px 0px 30px rgba(227,228,237,0.37)', border: '2px solid rgba(255,255,255,0.18)', borderRadius: '25px', padding: 2 }}>
                <Typography variant='h5'>Core Skills</Typography>
                <ListItem>Front-End Development: HTML5, CSS3, JavaScript, React.js, Material UI, Bootstrap, JQuery</ListItem>
                <ListItem>Back-End Development: PHP, Node.js, Express, MySQL, MongoDB</ListItem>
                <ListItem>Performance Optimization: Caching, Image Optimization, Real-Time Data Handling</ListItem>
                <ListItem>State Management: React.js, Apollo Client, PHP Sessions</ListItem>
                <ListItem>UI/UX Design: Strong focus on creating responsive, user-friendly interfaces</ListItem>
                <ListItem>Web Accessibility: Knowledgeable in WAI-ARIA and best practices for accessibility</ListItem>
                <ListItem>SEO Optimization: Experienced in improving website rankings and organic traffic</ListItem>
              </List>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
