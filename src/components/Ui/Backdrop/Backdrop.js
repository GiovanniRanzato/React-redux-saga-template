import React from 'react';
import classes from '../../../components/Ui/Backdrop/Backdrop.module.css';
// aggiunta prop zIndex per settare dinamicamente il layer del backdrop
const backdrop = (props) => (
     props.show ? <div 
        className={classes.Backdrop}
        onClick={props.clicked}
        style={{zIndex: props.zIndex }}
     ></div> : null
);
export default backdrop;