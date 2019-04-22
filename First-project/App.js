import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AssetExample from

export default class App extends React.Component {
    render() {
        return ( <
            View style = { styles.container } >

            <
            /View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    half1: {
        flex: 1,
        backgroundColor: 'red',
    },
    half2: {
        flex: 1,
        backgroundColor: 'blue'
    }
});