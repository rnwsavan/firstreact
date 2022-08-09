import * as ActionType from '../ActionType'

const newvalue = {
    text : "",
    color : ""
}
export const alertReducer =(state=newvalue ,action) =>{
    // console.log(action.payload, action.type);
    switch (action.type){
        
        case  ActionType.SET_ALERT: 
            return {
                ...state,
               text : action.payload.text,
               color : action.payload.color
            }

        case ActionType.RESET_ALERT:
            return{
                ...state,
                text : "",
                color : ""
            }
        
        default : 
            return state;
            
    }
    
}