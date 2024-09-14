import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Typography, List, ListItem, Link } from '@mui/material';
import { PiHandTapDuotone } from "react-icons/pi";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import Media from '../components/Character3D';


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  background: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
}));

const About = () => {
  const theme = useTheme();

  // Toggle link highlight periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightLink((prev) => !prev);
    }, 2000); // Same timing as animation (2 seconds)
    return () => clearInterval(interval);
  }, []);
  const [highlightLink, setHighlightLink] = useState(false);

  // CSS for link highlight
  const linkStyle = {
    color: highlightLink ? theme.palette.text.primary : theme.palette.primary.main,
    fontWeight: highlightLink ? 'bold' : 'normal',
    transition: 'color 0.3s, font-weight 0.3s',
  };
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container style={{marginTop: '50px'}}>
      <Typography variant="h3" style={{ fontWeight: 'bold', marginTop: '2rem', fontSize: '2em' }}>
        Amogh Anand Phadnis
      </Typography>

      <Box sx={{ flexGrow: 1, marginTop: '2rem' }}>


        <Grid container spacing={2}>
          {/* Introduction Section */}
          {isMobile ? (

            // Mobile-Grid
            <>
              <Grid item xs={12} md={4}>
                <Item>
                  <Box
                    sx={{
                      '&:hover': {
                        transform: 'scale(1.2)',
                        transition: 'transform 0.5s, box-shadow 0.5s',
                      },
                    }}
                  >
                    <Media
                      characterType="AmoghIntroduction"
                      description="Amogh Phadnis's Introductory Image"
                    />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={8}>
                <Item style={{ textAlign: 'left' }}>
                  <Typography variant="h4">Introduction:</Typography>
                  <Typography variant="body1">
                    Hi, I'm Amogh Phadnis, a passionate web developer and technology enthusiast based in Kitchener, Ontario, Canada. With a strong background in software engineering, web development, and a flair for solving complex problems, I specialize in building scalable, user-friendly applications. Currently, I'm pursuing my studies at Conestoga College, sharpening my skills while working on innovative projects like Employee Management Systems and eCommerce solutions.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {/* Add the rest of your introductory text here */}
                  </Typography>
                </Item>

                <Item style={{ textAlign: 'left' }}>
                  <Typography variant="h4">Skills and Experience:</Typography>
                  <Typography variant="body1">
                    Over the years, I have developed expertise in a range of technologies:
                  </Typography>
                  <List>
                    <ListItem>Full-stack development: ASP.NET, React, Node.js</ListItem>
                    <ListItem>Front-end: Material UI, Bootstrap, Flutter</ListItem>
                    <ListItem>Back-end: PHP, MySQL, MongoDB</ListItem>
                    <ListItem>API Integration: REST APIs, GraphQL, Apollo Client</ListItem>
                    <ListItem>SEO and Web Performance Optimization</ListItem>
                  </List>
                  <Typography variant='body1'>Experience:</Typography>
                  <List>
                    <ListItem>
                      I have worked as a Full-Stack Web Developer at DGate Integrated Services, leading front-end and back-end development, improving web performance. At Accurate Time Pvt Ltd, I focused on SEO and performance tuning, increasing organic traffic. Additionally, I developed web applications for financial operations at Bhavani Petroleums, streamlining processes.
                    </ListItem>
                  </List>
                </Item>

                <Item style={{ textAlign: 'left' }}>
                  <Typography variant="h4">Education:</Typography>
                  <Typography variant="body1">
                    My educational journey began at KLS Gogte College of Commerce, where I received a solid foundation in programming. I’m currently studying at Conestoga College to further enhance my skills in Web Development.
                  </Typography>
                </Item>


              </Grid>
            </>
          ) : (

            // Desktop-Grid
            <>

              <Grid item xs={12} md={8}>
                <Item style={{ textAlign: 'left' }}>
                  <Typography variant="h4">Introduction:</Typography>
                  <Typography variant="body1">
                    Hi, I'm Amogh Phadnis, a passionate web developer and technology enthusiast based in Kitchener, Ontario, Canada. With a strong background in software engineering, web development, and a flair for solving complex problems, I specialize in building scalable, user-friendly applications. Currently, I'm pursuing my studies at Conestoga College, sharpening my skills while working on innovative projects like Employee Management Systems and eCommerce solutions.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {/* Add the rest of your introductory text here */}
                  </Typography>
                </Item>
                <Item style={{ textAlign: 'left' }}>
                  <Typography variant="h4">Skills and Experience:</Typography>
                  <Typography variant="body1">
                    Over the years, I have developed expertise in a range of technologies:
                  </Typography>
                  <List>
                    <ListItem>Full-stack development: ASP.NET, React, Node.js</ListItem>
                    <ListItem>Front-end: Material UI, Bootstrap, Flutter</ListItem>
                    <ListItem>Back-end: PHP, MySQL, MongoDB</ListItem>
                    <ListItem>API Integration: REST APIs, GraphQL, Apollo Client</ListItem>
                    <ListItem>SEO and Web Performance Optimization</ListItem>
                  </List>
                  <Typography variant='body1'>Experience:</Typography>
                  <List>
                    <ListItem>
                      I have worked as a Full-Stack Web Developer at DGate Integrated Services, leading front-end and back-end development, improving web performance. At Accurate Time Pvt Ltd, I focused on SEO and performance tuning, increasing organic traffic. Additionally, I developed web applications for financial operations at Bhavani Petroleums, streamlining processes.
                    </ListItem>
                  </List>
                </Item>

                <Item style={{ textAlign: 'left' }}>
                </Item>

                <Item style={{ textAlign: 'left' }}>
                  <Typography variant="h4">Education:</Typography>
                  <Typography variant="body1">
                    My educational journey began at KLS Gogte College of Commerce, where I received a solid foundation in programming. I’m currently studying at Conestoga College to further enhance my skills in Web Development.
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} md={4}>
                <Item>
                  <Box
                    sx={{
                      '&:hover': {
                        transform: 'scale(1.2)',
                        transition: 'transform 0.5s, box-shadow 0.5s',
                      },
                    }}
                  >
                    <Media
                      characterType="AmoghIntroduction"
                      description="Amogh Phadnis's Introductory Image"
                    />
                  </Box>
                </Item>
              </Grid>
            </>
          )}

          {/* Skills and Experience Section with 3D Character */}
          <Grid item xs={12} md={4}>
            <Item>
              <Item>
                <Box
                  sx={{
                    '&:hover': {
                      transform: 'scale(1.2)',
                      transition: 'transform 0.5s, box-shadow 0.5s',
                    },
                  }}
                >
                  <Media
                    characterType="Achievements"
                    description="Amogh Phadnis's Achievements"
                  />
                </Box>
              </Item>
            </Item>
          </Grid>
          <Grid item xs={12} md={8}>
            <Item style={{ textAlign: 'left' }}>
              <Typography variant="h4">Projects and Achievements:</Typography>
              <Typography variant="body1">
                Some of my key Achievements include:
              </Typography>
              <List>
                <ListItem>
                  <Typography variant="body1">
                    <b>First Prize – Magnum (Inter-class Coding Fest)</b>: Debugged code in C and C++, developed web pages with HTML/CSS, and visualized data using R language in three different rounds.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1">
                    <b>Runner-up – Prodigy (Inter-college Coding Fest)</b>: Secured second place in a coding event conducted by Jain BCA College, Belgaum.
                  </Typography>
                </ListItem>
              </List>
              <>
                <Typography variant="body1">
                  For Projects please <Link component={RouterLink} to="/Projects" style={linkStyle}>click here...<PiHandTapDuotone
                    style={{
                      fontSize: 40,
                      rotate: '270deg',
                    }}
                  /></Link>
                </Typography>
              </>
            </Item>
            <Item style={{ textAlign: 'left' }}>
              <Typography variant="h4">Future Goals:</Typography>
              <Typography variant="body1">
                As I look ahead, my goal is to create innovative, impactful applications that bridge the gap between users and technology. I aspire to lead development teams and contribute to shaping the future of web development.
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
