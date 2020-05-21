import React from 'react';
import classes from '../Toolbar/Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuButton from '../MenuButton/MenuButton';

const toolbar = (props) => (
    <header className={classes.Toolabar}>
        <Logo />
        <nav className={classes.DesckTopOnly}>
            <NavigationItems clicked={props.menuToggled} isAuth={props.isAuth}/>
            
        </nav>
        <div className={classes.MobileOnly}>
            <MenuButton clicked={props.menuToggled} menuOpen={props.open}/>
        </div>
        
        
    </header>
);
export default toolbar;
