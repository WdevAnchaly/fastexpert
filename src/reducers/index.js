import addressSaveReducer from './addressSaveReducer'
import storage from "redux-persist/lib/storage";
import {combineReducers} from 'redux'
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    combine: addressSaveReducer
  });
export default persistReducer(persistConfig, rootReducer);