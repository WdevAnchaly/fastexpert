import addressSaveReducer from './addressSaveReducer'
import buyerSellerReducer from './buyerSellerReducer'
import savePropertyReducer from './savePropertyReducer'
import saveTimeBudget from './saveTimeBudget'
import saveTimeFrame from './saveTimeFrame'
import saveContacts from './contactReducer'
import storage from "redux-persist/lib/storage";
import {combineReducers} from 'redux'
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    combine: addressSaveReducer,
    buySell:buyerSellerReducer,
    propert:savePropertyReducer,
    budgetTime :saveTimeBudget,
    timeframe:saveTimeFrame,
    contacts:saveContacts,
    
  });
export default persistReducer(persistConfig, rootReducer);