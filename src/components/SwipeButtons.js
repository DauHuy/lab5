import React from "react";
import './SwipeButtons.css';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

const SwipeButtons = () => {
    return ( 
    <div className = "SwipeButtons" >
        <IconButton className = "SwipeButtons__repeat" >
        <ReplayIcon frontsize = "large" / >
        </IconButton> 
        <IconButton className = "SwipeButtons__left" >
        <CloseIcon frontsize = "large" / >
        </IconButton> 
        <IconButton className = "SwipeButtons__star" >
        <StarRateIcon frontsize = "large" / >
        </IconButton> 
        <IconButton className = "SwipeButtons__right" >
        <FavoriteIcon frontsize = "large" / >
        </IconButton> 
        <IconButton className = "SwipeButtons__lightning" >
        <FlashOnIcon frontsize = "large" / >
        </IconButton> 
        </div>
    )
}

export default SwipeButtons;