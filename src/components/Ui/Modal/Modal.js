import React from 'react';
import classes from '../../../components/Ui/Modal/Modal.module.css';
import Auxiliary  from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const  Modal = (props) => {
    return (
        <Auxiliary>
            <Backdrop
                show={props.show}
                clicked={props.modalClosed}
                zIndex={499}
            />
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>{props.children}
            </div>
        </Auxiliary>
    );
}
// React.memo
// Con react memo è possibile ottimizzare le prestazioni prevenendo la rirenderizzazione il componente wrappato
// è possibile passare un secondo argomento con una funzione per rirenderizzare il componente solo in caso di modifica di alcune props:
// La funzione prende come argomento le props precedenti e le nuove in questo modo si può può eseguire un check e deve ritornare TRUE se sono uguali o FALSE se sono diverse

export default React.memo(Modal, (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children);