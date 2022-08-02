import * as ActionType from '../ActionType'

const newvalue = {
    isLoading : false,
    medicine : [],
    error : ''
    
}


export const reducer_medicines = (state=newvalue, action )=>{
        
console.log(action.type , action.payload , state);
    switch(action.type){

        case ActionType
        .GET_MEDICINES :
        return {
            ...state,
            isLoading : false,
            medicine : action.payload,
            error : ''   
        }

        case ActionType.LOADING_MEDICINES:
            return{
                ...state,
                isLoading : true,
                medicine: [],
                error:''
            }

        case ActionType.ERROR_MEDICINES:
            return {
                ...state,
                isLoading: false,
                medicine : [],
                error: action.payload
            }

        default : 
        return state;
    }
}