import React from 'react';
import { Container, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Avatar } from "@mui/material";
import Amogh from '../Images/Amogh.jpg';

const About = () => {
  return (
    <Container>
      <Avatar
        variant="round"
        alt="Amogh Phadnis"
        src={Amogh}
        style={{
          width: 200,
          height: 200,
        }}
      />
      <Typography variant="h3">About Me</Typography><br />
      <Typography variant="body1">
        Hi, I’m Amogh Phadnis, a passionate Web Developer based in Kitchener, Ontario, Canada, with a strong background in building modern, responsive, and user-centric web applications. I specialize in both front-end and back-end development, ensuring the seamless integration of design, functionality, and performance in every project I work on.
      </Typography><br />
      <Typography variant='body1'>
        With a deep understanding of HTML5, CSS3, JavaScript, and various JavaScript frameworks like React.js, I excel at transforming design mockups into high-quality code. My focus is on delivering clean, maintainable, and optimized solutions that improve user experience and increase client satisfaction. Whether I’m improving a website’s performance, implementing dynamic features with REST APIs, or working on state management with React, I bring a detail-oriented and problem-solving mindset to every project.
      </Typography><br />
      <Typography variant='body1'>
      Throughout my professional journey, I’ve had the opportunity to work on diverse projects across industries, from revamping websites to developing comprehensive employee management systems. My experience working at DGate Integrated Services allowed me to lead front-end development efforts, resulting in a 30% improvement in client satisfaction. I’ve also had the privilege of building full-stack solutions during my time as a Web Developer Intern at Accurate Time Pvt Ltd, where I boosted website performance and increased organic traffic.
      </Typography><br />
      <Typography variant='body1'>
      In addition to my technical expertise, I bring strong communication and team collaboration skills, ensuring that all stakeholders are aligned and that projects are delivered on time and within scope. My ability to adapt to new technologies and frameworks has enabled me to constantly grow and deliver high-quality solutions for both clients and personal projects.
      </Typography><br />
      <List sx={{ backdropFilter: 'blur(30px)', boxShadow:'0px 0px, 30px rgba(227,228,237,0.37)', border:'2px solid rgba(255,255,255,0.18)', borderRadius:'25px', padding: 2 }} >
      <Typography variant='h5'>Core Skills</Typography><br />
        <ListItem>Front-End Development: HTML5, CSS3, JavaScript, React.js, Material UI, Bootstrap, JQuery</ListItem>
        <ListItem>Back-End Development: PHP, Node.js, Express, MySQL, MongoDB</ListItem>
        <ListItem>Performance Optimization: Caching, Image Optimization, Real-Time Data Handling</ListItem>
        <ListItem>State Management: React.js, Apollo Client, PHP Sessions</ListItem>
        <ListItem>UI/UX Design: Strong focus on creating responsive, user-friendly interfaces</ListItem>
        <ListItem>Web Accessibility: Knowledgeable in WAI-ARIA and best practices for accessibility</ListItem>
        <ListItem>SEO Optimization: Experienced in improving website rankings and organic traffic</ListItem>
      </List>
    </Container>
  );
};

export default About;
