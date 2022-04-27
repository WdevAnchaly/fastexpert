import {TIMEFRAME} from '../constants/ActionTypes';
const initialState ={
       timeFrame :{ 
            timeframe :'',
       }
}
function saveTimeFrame(state = initialState,action){
  
    switch(action.type){
       case TIMEFRAME:
        return {
           ...state,
           timeFrame:action.payload,
        
         }
         default:
         return state
    }
  }
  export default saveTimeFrame;