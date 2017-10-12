/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform} from 'react-native';

import Root from './src/Root';
import { Provider } from 'react-redux'
import configureStore from './src/configureStore'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const store = configureStore()

export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        );
    }
}
