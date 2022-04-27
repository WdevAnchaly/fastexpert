import * as types from '../constants/ActionTypes';
export function addressSave(payload){
    return{
      type: types.ADDRESS_SAVE,
      payload: payload,
     }
 }

 export function leadType(payload){
  return{
    type: types.BUYER_SELLER,
    payload: payload,
   }
}
export function property(payload){
  return{
    type: types.PROPERTY_TYPE,
    payload: payload,
   }
}

export function budget(payload){
  return{
    type: types.BUDGET,
    payload: payload,
   }
}

export function timeFrame(payload){
  return{
    type: types.TIMEFRAME,
    payload: payload,
   }
}

export function contacts(payload){
  return{
    type: types.CONTACTS,
    payload: payload,
   }
}

