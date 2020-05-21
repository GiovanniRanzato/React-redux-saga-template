// REACT
import React, { useState, /* , useCallback */ }  from 'react';
// CSS
import classes from './InputForm.module.css';
// UI
import Button from '../../../components/Ui/Button/Button';
import Spinner from '../../../components/Ui/Spinner/Spinner';
import Input from '../../../components/Ui/Input/Input';
//SHARED
import {updateObject, checkValidity} from '../../../shared/utility';


const  InputForm = (props) => {
    const [inputForm, setInputForm] = useState(props.formStructure);

    const controlsOrder = useState(() => {
        const ctrOrder = [];
        let i;
        for (i in inputForm) {
            ctrOrder.push(i);
        };
        return ctrOrder;
    })[0];
    const [formIsValid, setFormIsValid] = useState(false);

  
    const inputChangedHandler = (event, inputId) => {
        let value = event.target.value;
        if (event.target.type === 'checkbox') {
            value = event.target.checked;
        }
        const updatedFormElement = updateObject(inputForm[inputId], {
            value: value,
            valid: checkValidity(value, inputForm[inputId].validation),
            touched: true
        });
        
        const updatedInputForm = updateObject (inputForm, {[inputId]: updatedFormElement});
        // Check se tutto il form è valido:
        let isValid = true;
        let inpId = null;
        for (inpId in updatedInputForm){
            isValid = updatedInputForm[inpId].valid && isValid === true;
        }
        // AGGIUNGERE CONTROLLO UPDATE SELECT PER INVIARE UN AZIONE (DISPATCH) PER SETTARE I FILTRI
       
        
        setFormIsValid (isValid);
        setInputForm (updatedInputForm);
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        const content = {};
        let elementId=null;
        for (elementId in inputForm) {
            if (inputForm[elementId].elementType === 'number') {
                content[elementId] = parseInt (inputForm[elementId].value);
            }else{
                content[elementId] = inputForm[elementId].value;
            }
          
        }
        props.onConfirm(content);
    }
    const formElementsArray = [];
    let key;
    for (key in controlsOrder) {
        formElementsArray.push({
            id: controlsOrder[key],
            elementConfig: inputForm[controlsOrder[key]]
        });

    }
    let cancelButton = props.onCancel ? <Button key={'cancel'} btnType='Danger' clicked={(event)=>{ event.preventDefault(); props.onCancel();}}>CANCEL</Button> : null;
    let form = (
        <form>
            {formElementsArray.map(formElement => {
                if(!formElement.elementConfig.disabled){
                return ( <Input
                    key={formElement.id}
                    labelBefore={formElement.elementConfig.labelBefore}
                    labelAfter={formElement.elementConfig.labelAfter}
                    elementType={formElement.elementConfig.elementType}
                    elementConfig={formElement.elementConfig.elementConfig}
                    value={formElement.elementConfig.value}
                    invalid={!formElement.elementConfig.valid}
                    touched={formElement.elementConfig.touched}
                    shouldValidate={formElement.elementConfig.validation}
                    changed={(event) => inputChangedHandler(event, formElement.id ) }
                /> )}
                return null;
            })}
            <div className={classes.ModifierInputFormFooter}>
                {cancelButton}
                <Button key={'create'}  btnType='Success' clicked={submitHandler} disabled={!(formIsValid)}>{props.formType}</Button>
            </div>

        </form>
    );
    if (props.loading) {
        form = <Spinner />
    }
    return (
        <React.Fragment>
            {form}
        </React.Fragment>
    );
}
export default InputForm;