import { combineReducers } from "redux";

import bankReducer from './BankReducer'


const reducers = combineReducers({
    amount: bankReducer
})

export default reducers;