import React from 'react';
//import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import classes from './Title.module.css';
const title = (props) => (
    <div className={classes.TitleContainer}>
        <h2 className={classes.Title}>{props.title}</h2>
        <p className={classes.Lead}>{props.lead}</p>
    </div>);
export default title;