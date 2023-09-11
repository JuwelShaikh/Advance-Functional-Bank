function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputValue  = parseFloat(inputFieldString);
    inputField.value = '';
    return inputValue
}

function getInnerTextById(InnerId){
    const innerTextField = document.getElementById(InnerId);
    const innerTextFieldString = innerTextField.innerText;
    const innerTextValue = parseFloat(innerTextFieldString);
    return innerTextField;
}

