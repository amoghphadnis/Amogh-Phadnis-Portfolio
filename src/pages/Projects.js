import React from 'react';
import { Container, Typography } from '@mui/material';
import { Avatar } from "@mui/material";
import Amogh from '../Images/Amogh.jpg';

const Projects = () => {
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
      <Typography variant="h3">Projects</Typography><br/>
      <Typography variant="body1">
        Here you will find details of the projects I've worked on.
      </Typography>
    </Container>
  );
};

export default Projects;
