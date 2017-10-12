/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class IncomeExpenseFAB extends Component<{}> {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <ActionButton buttonColor="#9b59b6">
                <ActionButton.Item buttonColor='#1abc9c' title="Gelir" onPress={() => {
                }}>
                    <Icon name="ios-arrow-up" style={styles.actionButtonIcon}/>
                </ActionButton.Item>
                <ActionButton.Item buttonColor='rgba(231,76,60,1)' title="Gider"
                                   onPress={() => console.log("notes tapped!")}>
                    <Icon name="ios-arrow-down" style={styles.actionButtonIcon}/>
                </ActionButton.Item>
            </ActionButton>
        );
    }
}

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});
