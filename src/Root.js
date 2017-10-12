import React, {Component} from 'react';
import {View} from 'react-native'
import Dashboard from './container/Dashboard'

export default class Root extends Component<{}> {

    render() {
        return (
            <View>
                <Dashboard />
            </View>
        );
    }
}