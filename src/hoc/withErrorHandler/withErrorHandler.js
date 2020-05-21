import React from 'react';
// import {Component, useState, useEffect/} from 'react';
import Modal from '../../components/Ui/Modal/Modal';
import Auxiliary from '../Auxiliary/Auxiliary';
import useHttpErrorHandler from '../../hooks/http-error-handler';
const withErrorHandler = (WrappedComponent, httpClient) => {
    return props => {
        const [error, clearError] = useHttpErrorHandler(httpClient);

        return (
            <Auxiliary>
                <Modal
                    show={error}
                    modalClosed={clearError}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </Auxiliary >
        );

    }
}
export default withErrorHandler;

/*
const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = { error: null };
        reqInterceptor = axios.interceptors.response.use(
            req =>{
                this.setState ({error: null});
                return req;
            }
        );
        resInterceptor = axios.interceptors.response.use(
            res => res, 
            error => this.setState ({error} )
        );
        componentWillUnmount () {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.request.eject(this.resInterceptor);
        }
        errorConfirmedHandler = () => this.setState ({error:null});
        render () {
            console.log ('[WithErrorHandler] > render > error:',this.state.error);
            return (
                <Auxiliary>
                    <Modal 
                        show = {this.state.error}
                        modalClosed = {this.errorConfirmedHandler} >
                        {this.state.error ? this.state.error.message: null }
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxiliary>
            );
        }  
    }
}
export default withErrorHandler;*/