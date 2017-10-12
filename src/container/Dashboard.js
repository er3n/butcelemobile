import React, {Component} from 'react';

import {fetchTransactions} from '../actions'
import {connect} from 'react-redux'
import {View, Text, StyleSheet} from 'react-native'

let styles

export class Dashboard extends Component<{}> {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchTransactions(0, 50)
    }

    render() {

        return (
            <View style={styles.mainContent}>
                {
                    this.props.transactions.isFetching && <Text>Loading</Text>
                }
                {
                    this.props.transactions.data.length ? (
                        this.props.transactions.data.map((transaction, i) => {
                            return <View key={i}>
                                <Text>Name: {transaction.amount}</Text>
                                <Text>Age: {transaction.description}</Text>
                                <Text>Age: {transaction.sign}</Text>
                            </View>
                        })
                    ) : null
                }
            </View>
        );
    }

}


function mapStateToProps(state) {
    return {
        transactions: state.transactions
    }
}


function mapDispatchToProps(dispatch) {
    return {
        fetchTransactions: (start, size) => dispatch(fetchTransactions(start, size))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)


styles = StyleSheet.create({
    mainContent: {
        margin: 10,
    }
})