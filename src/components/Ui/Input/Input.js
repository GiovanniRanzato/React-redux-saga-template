import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    let inputElement = null;
    const inputClasses=[classes.InputElement];
    if (props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType){
        case ('input'):
            switch (props.elementConfig.type){
                case 'checkbox':
                    inputClasses.push(classes.CheckBox)
                    inputElement  = <input 
                    className={inputClasses.join(' ')} 
                    {...props.elementConfig} 
                    value={props.value}
                    onChange={props.changed}
                    />
                    break;
                default:
                    inputElement  = <input  
                    className={inputClasses.join(' ')} 
                    {...props.elementConfig} 
                    value={props.value}
                    onChange={props.changed}
                    />;
            }
         
            break;
        case ('textarea'):
            inputElement =<textarea 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}
            />;
            break;
        case ('select'):
            inputElement = (<select
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}
            >
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>{option.displayValue} </option>
                ))}

            </select>);
            break;
        default:
            inputElement =<input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}
                />;        
    }
    let labelBefore = props.labelBefore ? <label className={classes.Label} >{props.labelBefore}</label> : null;
    let labelAfter = props.labelAfter ? <label className={classes.Label} >{props.labelAfter}</label> : null;
    return (<div  className={classes.Input}>
            {labelBefore}
            {inputElement}
            {labelAfter}
            
    </div>);
}
    

export default Input;