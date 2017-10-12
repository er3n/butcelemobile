import { FETCH_TRANSACTIONS_PENDING, FETCH_TRANSACTIONS_FULFILLED, FETCH_TRANSACTIONS_REJECTED } from '../constants'
const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false
}

export default function transactionReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_TRANSACTIONS_PENDING:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_TRANSACTIONS_FULFILLED:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            }
        case FETCH_TRANSACTIONS_REJECTED:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}