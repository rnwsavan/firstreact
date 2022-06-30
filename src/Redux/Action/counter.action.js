import * as ActionTypes from '../ActionType'

export const incrementcounter = () => (dispatch) => {
    dispatch({type: ActionTypes.INCREMENT_DATA})
}

export const decrementcounter = () => (dispatch) => {
    dispatch({type : ActionTypes.DECREMENT_DATA})
}