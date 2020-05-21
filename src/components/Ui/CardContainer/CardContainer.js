import React from 'react';
import classes from './CardContainer.module.css';
    let style = [];
    const cardContainer = (props) => {

    switch (props.backGroundType){
        
        case ('clear'):
            style =[classes.MainContainer,classes.BackGroundTypeClear];
            break;
        default:
            style = [classes.MainContainer,classes.BackGroundTypeNormal];
    }
    style.push('Col-sm');
    return (
        <div className={style.join(' ')} >
            <div className={classes.Header}>{props.header}</div>
            <div className={classes.Content}>{props.children}</div>
            <div className={classes.Footer}>{props.footer}</div>
        </div>
    );
}
export default cardContainer;