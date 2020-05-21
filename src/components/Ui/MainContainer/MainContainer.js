import React from 'react';
import classes from './MainContainer.module.css';
const mainContainer = (props) => <div className={classes.MainContainer}>{props.children}</div>
export default mainContainer;