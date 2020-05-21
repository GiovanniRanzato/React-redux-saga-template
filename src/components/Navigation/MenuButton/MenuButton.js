import React from 'react';
import classes from './MenuButton.module.css';
const menuButton = (props) => {
    let cssClasses = [classes.MenuButton];
    if (props.menuOpen){
        cssClasses = [classes.MenuButton, classes.Change]; 
    }
    return (
        <div className={cssClasses.join(' ')} onClick={props.clicked} >
            <div className={classes.Bar1}></div>
            <div className={classes.Bar2}></div>
            <div className={classes.Bar3}></div>
        </div>
    );
}
export default menuButton;