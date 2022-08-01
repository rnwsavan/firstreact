import *as ActionTypes from '../ActionType'

export const signAction =(data)=>(dispatch)=>{
    dispatch({type :ActionTypes.SIGN_USER, payload:data})
}