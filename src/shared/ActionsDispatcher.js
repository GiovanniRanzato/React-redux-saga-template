import React , {useCallback} from 'react';
import { useDispatch } from 'react-redux';

import Button from '../components/Ui/Button/Button';
import CardContainer from '../components/Ui/CardContainer/CardContainer';

import * as actions from '../store/actions';

const ActionsDispatcher = () => {
    // AUTH
    const dispatch = useDispatch();
    const onLogin = useCallback((email, password, isSignUp) => dispatch(actions.authInit(email, password, isSignUp)), [dispatch]);
    const onLogout = useCallback(() => dispatch(actions.authLogoutInit()), [dispatch]);
    const onAutologin = useCallback(() => dispatch(actions.authAutologin()), [dispatch]);
    // USER
    const onCreatePublicUser = useCallback((params) => dispatch(actions.userCreateUserpublic(params)), [dispatch]);
    const onEditPublicUser = useCallback((params) => dispatch(actions.userEditUserpublic(params)), [dispatch]);
    // PUNTOAUTISMO
    const onCreatePuntoAutismoAccount = useCallback((params) => dispatch(actions.puntoautismoAccountCreate(params)), [dispatch]);
    const onEditPuntoAutismoAccount = useCallback((params) => dispatch(actions.puntoautismoAccountEdit(params)), [dispatch]);
    const onFindPuntoAutismoAccount = useCallback((params) => dispatch(actions.puntoautismoAccountFind(params)), [dispatch]);
    const onJoinPuntoAutismoAccount = useCallback((params) => dispatch(actions.puntoautismoAccountJoin(params)), [dispatch]);
    const onResponsetPuntoAutismoAccount = useCallback((params) => dispatch(actions.puntoautismoAccountReqResponse(params)), [dispatch]);
    
    const onReadJoinReqPuntoAutismoAccount = useCallback((params) => dispatch(actions.puntoautismoAccountReadJoinReq(params)), [dispatch]);
    const onReadJoinSendPuntoAutismoAccount = useCallback(() => dispatch(actions.puntoautismoAccountReadJoinSend()), [dispatch]);
    return (
        <CardContainer header='Action Dispatcher' footer='use buttons to dispatch actions'>
            <Button
                btnType={'Danger'}
                clicked={() => onLogin('user3@example.com', 'my pass', true)}> Login  </Button>
            <Button
                btnType={'Danger'}
                clicked={() => onLogin('user4@example.com', 'my pass', false)}> SignIn  </Button>
            <Button
                btnType={'Danger'}
                clicked={() =>
                    onLogout()}> Logout  </Button>
            <Button
                btnType={'Danger'}
                clicked={() =>
                    onAutologin()}> Autologin  </Button>
            <Button
                btnType={'Danger'}
                clicked={() =>
                    onCreatePublicUser({ name: 'Pippo', secondName: 'Lospazzino' })}> Create Public Profile</Button>
            <Button
                btnType={'Danger'}
                clicked={() =>
                    onEditPublicUser({ name: 'Sesterzio', secondName: 'Dollaracci' })}> Edit Public Profile</Button>
            <Button
                btnType={'Danger'}
                clicked={() =>
                    onCreatePuntoAutismoAccount({ name: 'Pippo', secondName: 'Lospazzino' , password: 'my pass'})}> Create .A Account</Button>
            <Button
                btnType={'Danger'}
                clicked={() =>
                    onEditPuntoAutismoAccount({ name: 'martino', secondName: 'Super pippo' , password: 'my pass' ,accountId: 'ihY4xPwROG'})}> Edit .A Account</Button>
            <Button
                btnType={'Danger'}
                clicked={() =>
                    onFindPuntoAutismoAccount({ name: 'martino', secondName: 'fingenzio' })}> Find .A Account</Button>
            <Button
                btnType={'Danger'}
                clicked={() =>
                    onJoinPuntoAutismoAccount({ accountId: 'pCAMvUXPuo', password: 'my pass', roleId: 'bXYDKfFY7B' })}> Join .A Account</Button>
            <Button
                btnType={'Danger'}
                clicked={() =>
                    onReadJoinReqPuntoAutismoAccount()}> Read recived Request</Button>
            <Button
                btnType={'Danger'}
                clicked={() =>
                    onReadJoinSendPuntoAutismoAccount()}> Read sended Request</Button>
            <Button
                btnType={'Danger'}
                clicked={() =>
                    onResponsetPuntoAutismoAccount({ requestId: 'M3eOoUHFrX', response: true })}> Response Request</Button>

        </CardContainer>
    )
}
export default ActionsDispatcher