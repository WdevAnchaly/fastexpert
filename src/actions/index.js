import * as types from '../constants/ActionTypes';
export function addressSave(payload){
    return{
      type: types.ADDRESS_SAVE,
      payload: payload,
     }
 }
