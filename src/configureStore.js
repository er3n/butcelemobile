import { createStore, applyMiddleware } from 'redux'
import app from './reducers'
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'remote-redux-devtools';

export default function configureStore() {
    let store = createStore(app, composeWithDevTools(applyMiddleware(promiseMiddleware())))
    return store
}