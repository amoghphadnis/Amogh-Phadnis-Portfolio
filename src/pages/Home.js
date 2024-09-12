import React from 'react';
import { Container, Typography, Card, CardContent, CardHeader, Grid, Button, Grow, Fade, Slide, Divider, Link, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Amogh from '../Images/Amogh.jpg';
import { FaCss3Alt, FaPhp, FaCode, FaReact, FaBootstrap, FaNodeJs, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { GrStorage } from "react-icons/gr";
import { MdOutlineComputer } from "react-icons/md";
import { DiJqueryLogo, DiJavascript } from 'react-icons/di';
import { SiApollographql, SiMysql, SiMongodb } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';

// Consolidate card styles into one function to reuse
const cardStyles = (theme) => ({
  background: theme.palette.mode === 'dark' ? 'linear-gradient(to right bottom, #103CE7, #64E9FF)' : 'linear-gradient(to right bottom, #0172AF, #74FEBD)',
  color: theme.palette.mode === 'dark' ? '#000000' : '#000000',
  borderRadius: 12,
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  padding: 10,
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.3)',
  }
});

const Home = () => {
  const theme = useTheme();

  // Intersection Observer
  const [refSkills, inViewSkills] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [refProjects, inViewProjects] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [refTechStack, inViewTechStack] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Container align="center" style={{ paddingTop: 20, color: theme.palette.mode === 'dark' ? '#59EBCB' : '#2C3F50' }}>
      {/* Avatar and Introduction Section */}
      <Grow in timeout={1000}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <Avatar
            variant="round"
            alt="Amogh Phadnis"
            src={Amogh}
            style={{
              width: 200,
              height: 200,
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
            }}
          />
        </div>
      </Grow>

      <Fade in timeout={1500}>
        <Typography variant="h3" align="center" gutterBottom style={{ fontWeight: 600 }}>
          Hi, This is Amogh Phadnis
        </Typography>
      </Fade>

      <Fade in timeout={2000}>
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <Typography variant="body1" align="center" gutterBottom>
            A Web Developer with a strong track record of crafting successful web applications.<br />
            Here you can find more about my skills, experience, and projects.
          </Typography>
          <Button variant='contained' href='/Amogh-Phadnis-Portfolio/about' style={{
            background: 'linear-gradient(to right bottom, #0172AF, #74FEBD)',
            color: '#000000',
            borderRadius: 12,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            padding: 10
          }}>
            Know More
          </Button>
        </div>
      </Fade>

      {/* Skills Divider */}
      <Divider>
        <Typography variant='h5' align="center" style={{ padding: '10px 0', fontWeight: 600 }}>
          Skills
        </Typography>
      </Divider>

      {/* Skills Grid */}
      <div ref={refSkills}>
        <Slide direction="up" in={inViewSkills} timeout={1000} mountOnEnter unmountOnExit>
          <Grid container align="center" spacing={2} style={{ marginTop: 20 }}>
            {/* Map through skills */}
            {[
              { title: 'Web Performance Optimization', details: ' Image Optimization\n SEO Optimization\n Page Load Time Improvements' },
              { title: 'Frontend Development', details: 'HTML5, CSS3, JavaScript\n React.js, JQuery\n Bootstrap, Material UI' },
              { title: 'Backend Development', details: 'Node.js, Express, PHP \n MySQL, MongoDB, Apollo Client (GraphQL)\n Rest API, Version Control(Git)' },
              { title: 'State Management', details: 'React.js State Management\n Session Management in PHP\n Apollo Client' },
            ].map((skill, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={cardStyles(theme)}>
                  <CardHeader title={skill.title} />
                  <CardContent>
                    <Typography variant="body1">{skill.details.split('\n').map((line, i) => (<span key={i}>{line}<br /></span>))}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Slide>
      </div>

      {/* Tech Stack Section */}
      <div ref={refTechStack}>
        <Slide direction="up" in={inViewTechStack} timeout={1000} mountOnEnter unmountOnExit>
          <Grid container justifyContent="center" spacing={4} style={{ marginTop: 20 }}>
            {/* Tech Stack Icons */}
            {[FaCode, FaHtml5, FaCss3Alt, DiJavascript, FaReact, DiJqueryLogo, FaBootstrap, MdOutlineComputer, GrStorage, FaNodeJs, FaPhp, SiMysql, SiApollographql, SiMongodb, FaGithub].map((Icon, i) => (
              <Grid item key={i}>
                <Icon style={{ fontSize: 40 }} />
              </Grid>
            ))}
          </Grid>
        </Slide>
      </div>


      {/* Projects Section */}
      <div ref={refProjects}>
        <Divider style={{ marginTop: 40 }}>
          <Typography variant='h5' align="center" style={{ padding: '10px 0', fontWeight: 600 }}>
            Projects
          </Typography>
        </Divider>

        <Slide direction="up" in={inViewProjects} timeout={1000} mountOnEnter unmountOnExit>
          <Grid container align="center" justifyContent="center" spacing={3} style={{ marginTop: 20 }}>
            {/* Project 1 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                style={{
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(26, 91, 107,0.6)' : 'rgba(10,59,71,0.8)',
                  color: theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff',
                  borderRadius: 12,
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s',
                  padding: 10,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0px 6px 16px rgba(0, 0, 0, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)';
                }}>
                <CardHeader title="Employee Management System (EMS)" />
                <CardContent>
                  <Typography variant="body1">
                    Full-stack app to manage employee data, featuring secure CRUD operations, an admin portal, and tools for tracking upcoming retirements.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<FaGithub />}
                    href="https://github.com/amoghphadnis/Employee-Management-System"
                    target='_blank'
                    fullWidth
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Project 2 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                style={{
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(26, 91, 107,0.6)' : 'rgba(10,59,71,0.8)',
                  color: theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff',
                  borderRadius: 12,
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s',
                  padding: 10,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0px 6px 16px rgba(0, 0, 0, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)';
                }}>
                <CardHeader title="E-commerce Shopping Cart for Gaming Accessories" />
                <CardContent>
                  <Typography variant="body1">
                    E-commerce app for gaming accessories, developed with PHP, MySQL, JavaScript, and Bootstrap, enabling cart management and real-time price calculations.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<FaGithub />}
                    href="https://github.com/amoghphadnis/E-commerce-Shopping-Cart-for-Gaming-Accessories"
                    target='_blank'
                    fullWidth
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid  container justifyContent="center" spacing={4} style={{ marginTop: 10 }}>
              <Grid item>
                <Link href="/Projects" style={{textDecoration: theme.palette.mode === 'dark' ? 'none' : 'none'}}>{'View all Projects'}</Link>
              </Grid>
            </Grid>
          </Grid>
        </Slide>
      </div>

      {/* Call-to-Action Section */}
      <div style={{marginTop: 40}}>
      <Fade in timeout={2000}>
        <div style={{ textAlign: 'center', marginTop: 20 }}>
        <Divider style={{ marginTop: 40 }}>
          <Typography variant='h5' align="center" style={{ padding: '10px 0', fontWeight: 600 }}>
            Get in Touch
          </Typography>
        </Divider>
          <Button variant='contained' href='/Contact' loading="lazy" style={{
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
        </div>
        </Fade>
        </div>

        <Grid container justifyContent="center" spacing={4} style={{ marginTop: 20 }}>
            {/* Tech Stack Icons */}
            <Grid item>
              <Link href="https://www.linkedin.com/in/amogh-anand-phadnis/" target="_blank"><FaLinkedin style={{ fontSize: 40 }} /></Link>
            </Grid>
            <Grid item>
            <Link href="https://www.instagram.com/amoghphadnis/" target="_blank"><FaInstagram style={{ fontSize: 40 }} /></Link>
            </Grid>
            <Grid item>
            <Link href="https://github.com/amoghphadnis" target="_blank"><FaGithub style={{ fontSize: 40 }} /></Link>
            </Grid>
          </Grid>

    </Container >
  );
};

export default Home;