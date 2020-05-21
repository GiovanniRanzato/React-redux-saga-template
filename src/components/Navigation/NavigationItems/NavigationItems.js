import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from '../../../components/Navigation/NavigationItems/NavigationItems.module.css';
import {PagesConfig} from '../../../config/pagesConfig';

const navigationItems = (props) => {
    let navItems = null;
    if (props.isAuth) {
        navItems = PagesConfig.authMenu.map((toolEl => {
            return (<NavigationItem key= {toolEl.id} link={toolEl.path} >{toolEl.label}</NavigationItem>);
        }))
    } else {
        navItems = PagesConfig.notAuthMenu.map((toolEl => {
            return (<NavigationItem  key= {toolEl.id}  link={toolEl.path} >{toolEl.label}</NavigationItem>);
        }))
    }
    
    return <ul className={classes.NavigationItems}>{navItems}</ul>

}
export default navigationItems;