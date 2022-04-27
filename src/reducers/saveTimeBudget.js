import {BUDGET} from '../constants/ActionTypes';
const initialState ={
       budget :{ 
            timeLine :'',
       }
}
function saveTimeBudget(state = initialState,action){
  
    switch(action.type){
       case BUDGET:
        return {
           ...state,
           budget:action.payload,
        
         }
         default:
         return state
    }
  }
  export default saveTimeBudget;