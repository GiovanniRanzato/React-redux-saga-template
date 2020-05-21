import React , {useCallback} from 'react';
// REDUX
import { useDispatch,useSelector } from 'react-redux';
import  * as actions from '../../../../store/actions';


// CUSTOM
import InputForm from '../../../Ui/InputForm/InputForm';
import Spinner from '../../../Ui/Spinner/Spinner'

import {LOGIN_TEXT} from '../../../../config/text';

const  FormLogin = (props) => {
    const loading = useSelector (state => state.ui.loading);
    const dispatch = useDispatch();
    const onLogin = useCallback((email, password, isSignUp) => dispatch(actions.authInit(email, password, isSignUp)), [dispatch]);
    const form = {
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: LOGIN_TEXT.USER[props.lang],
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: LOGIN_TEXT.PASSWORD[props.lang],
            },
            value: '',
            validation: {
                required: true,
                minLength: 3
            },
            valid: false,
            touched: false
        }
    };
    const onConfirmHandler = (params) => {
        console.log(params);
        onLogin(params.email,params.password, true);
    }
    let formLogin = <Spinner />
    if(!loading){
        formLogin = <InputForm
        formStructure={form}
        onConfirm={onConfirmHandler}
        onCancel={null}
        formType={LOGIN_TEXT.BUTTON[props.lang]}
    />
    }
   
    return <React.Fragment>
        {formLogin}     
    </React.Fragment>
}
export default FormLogin;
