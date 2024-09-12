// src/components/Character3D.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

// Assuming images are in src/assets/ and using imports
import Achievements from '../Images/achievements.png';

const images = {
    Achievements: Achievements,
};

const Character3D = ({ characterType, description }) => {
  const imageSrc = images[characterType] || null;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} style={{filter: 'drop-shadow(0px 2px 15px rgba(255,255,255,0.5))'}}>
      {imageSrc ? (
        <img 
          src={imageSrc} 
          alt={description} 
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} 
        />
      ) : (
        <Typography variant="body2" color="textSecondary">
          Image not available
        </Typography>
      )}
    </Box>
  );
};

Character3D.propTypes = {
  characterType: PropTypes.oneOf([
    'intro',
    'skills',
    'education',
    'projects',
    'futureGoals',
    'callToAction'
  ]).isRequired,
  description: PropTypes.string.isRequired,
};

export default Character3D;
