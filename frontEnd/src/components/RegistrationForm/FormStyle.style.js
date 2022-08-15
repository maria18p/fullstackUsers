import styled from "styled-components";

const BASIC_CONTAINER_SETTINGS = `
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 2px solid black;
    gap: 10px;
`

export const FormMainContainer = styled.div`
    ${BASIC_CONTAINER_SETTINGS}
    background-color: #FF7F50;;
    flex-direction: column;
    padding: 15px;
    border-radius: 15px;
`

export const HeaderContainder = styled.div`
    ${BASIC_CONTAINER_SETTINGS}
    background-color: transparent;
    h4{
        color: white;
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    label{
        color: white;
    }
    input{
        background-color: transparent;
        border: 1px solid white;
    }
    /* border: 2px solid black; */
`

export const InputLIneContainer = styled.div`
    ${BASIC_CONTAINER_SETTINGS}
    display: grid;
    grid-template-columns: 1fr 1fr;
`


export const FormActionsContainder = styled.div`
    ${BASIC_CONTAINER_SETTINGS}
`

export const FormActionButton = styled.button`
    background-color: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 15px;
    &:hover{
        cursor: pointer;
        background-color: black;
    }
`

