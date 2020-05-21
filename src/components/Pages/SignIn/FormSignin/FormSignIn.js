import React , {useCallback} from 'react';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import  * as actions from '../../../../store/actions';


// CUSTOM
import InputForm from '../../../Ui/InputForm/InputForm';
import Spinner from '../../../Ui/Spinner/Spinner'


import {SIGNIN_TEXT} from '../../../../config/text';

const  FormLogin = (props) => {
    const loading = useSelector (state => state.ui.loading);
    const dispatch = useDispatch();
    const onLogin = useCallback((email, password, isSignUp) => dispatch(actions.authInit(email, password, isSignUp)), [dispatch]);
    const form = {
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: SIGNIN_TEXT.USER[props.lang],
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
                placeholder: SIGNIN_TEXT.PASSWORD[props.lang],
            },
            value: '',
            validation: {
                required: true,
                minLength: 3
            },
            valid: false,
            touched: false
        },
        acceptTerms: {
            elementType: 'input',
            validation: {
                isChecked: true
            },
            elementConfig: {
                type: 'checkbox',
                name: 'acceptTerms'
            },
            value: true,
            valid: false,
            touched: false,
            labelAfter: SIGNIN_TEXT.ACCEPT_TERMS[props.lang]
        }
    };
    const onConfirmHandler = (params) => {
        console.log(params);
        onLogin(params.email,params.password, false);
    }

    let formSignin = <Spinner />
    if(!loading){
        formSignin = <InputForm
        formStructure={form}
        onConfirm={onConfirmHandler}
        onCancel={null}
        formType={SIGNIN_TEXT.BUTTON[props.lang]}
    />
    }
   
    return <React.Fragment>
        {formSignin}     
    </React.Fragment>
}




export default FormLogin;