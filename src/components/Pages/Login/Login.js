import React from 'react';
import FormLogin from './FormLogin/FormLogin';
import CardContainer from '../../Ui/CardContainer/CardContainer';

const Login = (props) => {
 return <CardContainer>
     <FormLogin
        lang = {props.lang}
     
     />
 </CardContainer>
}
export default Login;