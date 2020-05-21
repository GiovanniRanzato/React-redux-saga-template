export const updateObject = (oldObject, updatedProprieties) =>{
    return {
        ...oldObject,
        ...updatedProprieties
    };
}
//Ritorna true se il valore inserito è conforme alla regola passata
export const checkValidity = (value, rules) => {
    /*In questa funzione possimo verificare la validità degli elementi in base alle regole 
    definite nello state: il primo controllo if(rules.rulename) verifica se la regola è specificata,
    quindi se esiste la reglola procede con le verifiche del caso, in caso contrario si procede con
    la regola sucessiva. */
    let isValid = true;
    if(rules.isChecked){
        isValid = value && isValid;
    }
    if(rules.required){
        isValid = value.trim() !== '' && isValid;
    }
    if (rules.isEmail){
        const pattern=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        isValid = pattern.test (value) && isValid;
    }
    if(rules.minLength){
        isValid = value.length >= rules.minLength && isValid;
    }
    if(rules.maxLength){
        isValid = value.length >= rules.maxLength && isValid;
    }
    return isValid;
}

// Ritorna un  ogetto clonato senza le proprietà da non copiare:
// Attr 1: Ogetto da copiare NB: NON passare oggetti annidati
// Attr 2: Array
export const partialCopy = (obj, attToNotCopy) => {
    let newObj = {};
    let i = 0;
    let j = 0;
    let duplicable=true;
    for (i in obj){
        for (j in attToNotCopy){
            if (i === attToNotCopy[j]){
                duplicable=duplicable&&false; 
            } 
        }
        if(duplicable){
            newObj= {...newObj, [i]:obj[i]};
        }
        duplicable=true;
    }
    return newObj;
}