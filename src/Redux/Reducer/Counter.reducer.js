import *  as ActionTypes from '../ActionType'


const initalState = {
    counter : 0
}

export const counterReducer = (state = initalState, action) => {
    switch (action.type){
        case ActionTypes.INCREMENT_DATA:
            return{
                ...state,
                counter: state.counter + 1
            }
        case ActionTypes.DECREMENT_DATA:
            return{
                ...state,
                counter: state.counter - 1
            }
        default:
            return state    
    }
}