import React from 'react';
import { FormActionButton, FormActionsContainder, FormMainContainer, HeaderContainder, InputContainer, InputLIneContainer } from "./FormStyle.style";

export default function FormView({ inputFields, updateUserDetails, submit }) {



    const generateInputs = inputFields.map((element) => {
        return(
            <InputLIneContainer
            key={element}>
                <label>{element}:</label>
                <input
                onChange={(e) => updateUserDetails({key: element, value: e.target.value})}
                ></input>
            </InputLIneContainer>
        );
    }) 


    return (
        <>
            <FormMainContainer>
                <HeaderContainder>
                    <h4>Register:</h4>
                </HeaderContainder>
                <InputContainer>
                {generateInputs}
                </InputContainer>
                <FormActionsContainder>
                    <FormActionButton
                        onClick={submit}
                    >Submit</FormActionButton>
                </FormActionsContainder>
            </FormMainContainer>
        </>
    );
}  
