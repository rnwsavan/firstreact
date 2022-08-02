import * as ActionType from '../ActionType'

const newvalue = {
    isLoading : false,
    user : null,
    error:''
}
export const authReducer =(state=newvalue ,action) =>{
    switch (action.type){
        
        case  ActionType.EMAIL_VARIFICATION: 
            return {
                ...state,
               isLoading:false,
               user:action.payload,
               error:''
            }
        
        default : 
            return state;
            
    }
    
}