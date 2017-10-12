import {
    View
} from 'react-native';

import React, {Component} from 'react';

import IncomeExpenseFAB from "./component/IncomeExpenseFAB";


export default class Root extends Component<{}> {
    render() {
        return (
            <View style={{flex: 1}}>
                <IncomeExpenseFAB />
            </View>
        );
    }
}
