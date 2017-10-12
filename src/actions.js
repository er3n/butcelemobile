import {FETCH_DATA, FETCH_TRANSACTIONS} from './constants'
import getPeople, {getTransactions} from './api/api'

export function fetchData() {
    return {
        type: FETCH_DATA,
        payload: getPeople()
    }
}

export function fetchTransactions(start, size) {
    return {
        type: FETCH_TRANSACTIONS,
        payload: getTransactions(start, size)
    }
}