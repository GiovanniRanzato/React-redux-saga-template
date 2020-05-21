import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop(props) {
    const { history } = props;
    const { listen } = history;

    useEffect(() => {

        const unlisten = listen(() => {
            console.log(window);
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }

    }, [listen]);

    return <Fragment>{props.children}</Fragment>;
}

export default withRouter(ScrollToTop);