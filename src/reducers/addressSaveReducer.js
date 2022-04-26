import {ADDRESS_SAVE} from '../constants/ActionTypes';
const initialState ={
      isConfirmatiom : false,
       useraddress :{ 
            markers :[],
       }
}

function addressSaveReducer(state = initialState,action){
  
    switch(action.type){
       case ADDRESS_SAVE:
        return {
           ...state,
           isConfirmatiom:true,
           useraddress:action.payload,
        
         }
         default:
         return state
    }
  }
  export default addressSaveReducer;