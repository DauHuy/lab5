import React from "react";
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

const Header = () => {
    return ( 
    <div className = "header" >
        <IconButton >
        <PersonIcon frontsize = "large" className = "header__icon" / >
        </IconButton>  
        <img className = "header__logo" src = "https://s1.img.yan.vn/YanNews/2167221/201606/20160625-101740-12_600x399.jpg" alt = "header" / >
        <IconButton >
        <ForumIcon frontsize = "large" className = "header__icon" / >
        </IconButton>  
        </div>
    )
}

export default Header;