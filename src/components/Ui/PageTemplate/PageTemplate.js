import React from 'react';
import MainContainer from '../MainContainer/MainContainer';
import Title from '../Title/Title'

const PageTemplate = (props) => {

    return (
        <React.Fragment>
            <Title title={props.title} lead={props.lead}></Title>
            <MainContainer>
            {props.children}
            </MainContainer>
        </React.Fragment>

    );
}
export default PageTemplate