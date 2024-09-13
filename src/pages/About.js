import React, {useState} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Typography, Avatar, List, ListItem, Button, Link } from '@mui/material';
import { PiHandTapDuotone } from "react-icons/pi";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import Amogh2 from '../Images/Amogh(2).jpg';
import Character3D from '../components/Character3D'; // Assume you have a component for 3D characters

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  background: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
}));

const About = () => {
  const [highlightLink, setHighlightLink] = useState(false);

  // CSS for link highlight
  const linkStyle = {
    color: highlightLink ? '#ffffff' : '#59EBCB',
    fontWeight: highlightLink ? 'bold' : 'normal',
    Scale: highlightLink ? '3.0' : '1.0',
    transition: 'color 0.3s, font-weight 0.3s infinite, Scale 0.5s',
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container>
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
                    <ListItem>Full-stack development (ASP.NET, React, Node.js)</ListItem>
                    <ListItem>Front-end design using Material UI, Bootstrap, and Flutter</ListItem>
                    {/* Add other skills */}
                  </List>
                </Item>
                <Item style={{ textAlign: 'left' }}>
                  <Typography variant="h4">Education:</Typography>
                  <Typography variant="body1">
                    My educational journey began at KLS Gogte College of Commerce, where I received a solid foundation in programming. Since then, I have been continuously learning, culminating in my current studies at Conestoga College in Canada.
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
                    <ListItem>Full-stack development (ASP.NET, React, Node.js)</ListItem>
                    <ListItem>Front-end design using Material UI, Bootstrap, and Flutter</ListItem>
                    {/* Add other skills */}
                  </List>
                </Item>
                <Item style={{ textAlign: 'left' }}>
                  <Typography variant="h4">Education:</Typography>
                  <Typography variant="body1">
                    My educational journey began at KLS Gogte College of Commerce, where I received a solid foundation in programming. Since then, I have been continuously learning, culminating in my current studies at Conestoga College in Canada.
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
            </>
          )}

          {/* Skills and Experience Section with 3D Character */}
          <Grid item xs={12} md={4}>
            <Item>
              <Character3D
                characterType="Achievements"
                description="3D character working on code"
              />
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
                  For Projects please <Link component={RouterLink} to="/Projects" style={linkStyle}>click here...</Link>
                </Typography>

                <List>
                  <PiHandTapDuotone
                    style={{
                      fontSize: 40,
                      animation: 'moveIcon 2s ease-in-out forwards infinite',
                    }}
                    onAnimationEnd={() => setHighlightLink(true)} // Highlight the link when animation ends
                  />
                </List>

                {/* CSS for animation */}
                <style>
                  {`
                    @keyframes moveIcon {
                      0% {
                        transform: translateX(25px);
                      }
                      25% {
                        transform: translateY(25px);
                        }
                      100% {
                        transform: translateX(140px); /* Adjust according to your layout */
                      }
                    }
                  `}
                </style>
              </>
            </Item>
            <Item style={{ textAlign: 'left' }}>
              <Typography variant="h4">Future Goals:</Typography>
              <Typography variant="body1">
                As I look ahead, my goal is to create innovative, impactful applications that bridge the gap between users and technology. I aspire to lead development teams and contribute to shaping the future of web development.
              </Typography>
            </Item>
          </Grid>

          {/* Call to Action Section with 3D Character */}
          <Grid item xs={12}>
            <Item>
              <Typography variant="h4">Get in Touch:</Typography>
              <Button variant='contained' component={Link} to="/Contact" loading="lazy" style={{
                background: theme.palette.mode === 'dark' ? 'linear-gradient(to right bottom, #0172AF, #74FEBD)' : 'linear-gradient(to right bottom, #0172AF, #74FEBD)',
                color: theme.palette.mode === 'dark' ? '#000000' : '#000000',
                borderRadius: 12,
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s',
                padding: 10
              }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0px 6px 16px rgba(0, 0, 0, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)';
                }}>
                Contact
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;