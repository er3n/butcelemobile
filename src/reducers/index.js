import { combineReducers } from 'redux'
import appData from './dataReducer'
import transactions from './transactionReducer'

const rootReducer = combineReducers({
    appData, transactions
})

export default rootReducer