import {PROPERTY_TYPE} from '../constants/ActionTypes';
const initialState ={
       propertyType :{ 
            name :'',
       }
}
function savePropertyReducer(state = initialState,action){
  
    switch(action.type){
       case PROPERTY_TYPE:
        return {
           ...state,
           propertyType:action.payload,
        
         }
         default:
         return state
    }
  }
  export default savePropertyReducer;