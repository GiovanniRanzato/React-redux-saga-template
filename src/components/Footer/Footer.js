import React from 'react';
import classes from './Footer.module.css';
import {FooterConfig} from '../../config/footerConfig';


const footer = () => {
    let sections = FooterConfig.sections.map(section=> <p key={section.id}> {section.text}</p>)
    let links = FooterConfig.links.map(link => <div key={link.id}><a href={link.path}><i className={link.icon}></i></a></div> )
    return (
        <footer id="footer" className={classes.Footer}>
            <div className={classes.FooterContent}>
                {sections}
                <div className={classes.SocialLink}>
                    {links}
                </div>
            </div>
        </footer>
    );
};
export default footer;