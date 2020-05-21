import React, {useState} from 'react';
import Auxiliary from '../hoc/Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Footer from '../components/Footer/Footer';
import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import TopDrawer from '../components/Navigation/TopDrawer/TopDrawer';
// REDUX



const Layout = (props) =>  {
 
    const [showSideDrawer, setShowSideDrawer] = useState(false);
    
    const sideDrawerClosedHandler = () => {
        setShowSideDrawer (false);
    }
    const sideDrawerTogglerHandler = () => {
        setShowSideDrawer (!showSideDrawer);
    }
    return (
        <Auxiliary>
            <div className={classes.MainWrapper}>
                <Toolbar 
                    className={classes.Toolabar}
                    menuToggled={sideDrawerTogglerHandler}
                    open={showSideDrawer}
                    isAuth={props.isAuthenticated}>
                </Toolbar>
                <TopDrawer
                    open={showSideDrawer}
                    closed={sideDrawerClosedHandler}
                    isAuth={props.isAuthenticated} />
                <main className={classes.Content}>{props.children}</main>
            </div>
            <Footer />
        </Auxiliary>
    );
    
}

export default Layout;
