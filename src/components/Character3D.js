// src/components/Character3D.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

// Assuming images are in src/assets/ and using imports
import Achievements from '../Images/achievements.png';
import AmoghIntroduction from '../Images/Amogh2.jpg';
import EMS1 from '../Images/Projects/EMS_1.png';
import EMS2 from '../Images/Projects/EMS_2.png';
import GamingCartMobile from '../Images/Projects/GamingAccessories_Cart_Mobile.png';
import GamingCartDesktop from '../Images/Projects/GamingAccessories_Cart_Desktop.png';
import GamingHomeMobile from '../Images/Projects/GamingAccessories_Home_Mobile.png';
import GamingHomeDesktop from '../Images/Projects/GamingAccessories_Home_Desktop.png';
import WatchAdmin from '../Images/Projects/WatchWorld_Admin.png';
import WatchCart from '../Images/Projects/WatchWorld_Cart.png';
import WatchHome from '../Images/Projects/WatchWorld_Home.png';

const images = {
    Achievements: Achievements,
    AmoghIntroduction: AmoghIntroduction,
    EMS1:EMS1,
    EMS2: EMS2,
    GamingCartMobile: GamingCartMobile,
    GamingCartDesktop: GamingCartDesktop,
    GamingHomeMobile: GamingHomeMobile,
    GamingHomeDesktop: GamingHomeDesktop,
    WatchAdmin: WatchAdmin,
    WatchCart: WatchCart,
    WatchHome: WatchHome,
};

const Character3D = ({ characterType, description }) => {
    const imageSrc = images[characterType] || null;

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} style={{ filter: 'drop-shadow(0px 2px 15px rgba(255,255,255,0.5))' }}>
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
