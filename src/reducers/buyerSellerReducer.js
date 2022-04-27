import {BUYER_SELLER} from '../constants/ActionTypes';
const initialState ={
  
       sellerType :{ 
            name :'',
       }
}
function buyerSellerReducer(state = initialState,action){
  
    switch(action.type){
       case BUYER_SELLER:
        return {
           ...state,
           sellerType:action.payload,
        
         }
         default:
         return state
    }
  }
  export default buyerSellerReducer;