import React from 'react';
import appLogo from '../../../img/logo.png';
import classes from './Logo.module.css';

const logo = () => (
    <div className={classes.Logo} >
        <img src={appLogo} alt='logo'></img>
    </div>
    
);
export default logo;