import React, { useReducer } from 'react'
import { makeLoginRequest } from '../../requests/LoginRequest/LoginRequestController'
import User from './FormModel'
import FormView from './FormView'

export default function FormController() {

  const userReducer = (state, action) => {
    const newState = {map: state.map.set(action.key, action.value)}
    return newState;
  }
  const [userDetails, dispatchUser] = useReducer(userReducer, {map:User.USER_ATTR_MAP()})

  const submit = () => {
    const userObj = new User(userDetails.map)
    makeLoginRequest(userObj)
  }

  return (
    <FormView 
    inputFields={User.ATTRIBUTES}
    updateUserDetails={dispatchUser}
    submit={submit}
    />
  )
}
