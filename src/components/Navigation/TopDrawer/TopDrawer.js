import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './TopDrawer.module.css';
import Backdrop from '../../Ui/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
const TopDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <nav>
                    <NavigationItems  isAuth={props.isAuth}/>
                </nav>
                
            </div>
        </Auxiliary>
    );
};
export default TopDrawer;
