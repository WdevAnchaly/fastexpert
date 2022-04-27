import {CONTACTS} from '../constants/ActionTypes';
const initialState ={
       contactInfo :[]
}
function saveContacts(state = initialState,action){
  
    switch(action.type){
       case CONTACTS:
        return {
           ...state,
           contactInfo:action.payload,
        
         }
         default:
         return state
    }
  }
  export default saveContacts;