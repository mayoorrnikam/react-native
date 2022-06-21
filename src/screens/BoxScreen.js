import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BoxScreen = () => {
    return (
        <View style={styles.parentViewStyle}>
            <View style={styles.viewOne}></View>
            <View style={styles.viewTwo}></View>
            <View style={styles.viewThree}></View>
        </View>
    )
}

export default BoxScreen

const styles = StyleSheet.create({
    parentViewStyle: {
        margin: 20,
        borderColor: 'blue',
        borderWidth: 1,
        height: 100,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    viewOne: {
        height: 60,
        width: 60,
        padding: 20,
        borderColor: 'red',
        backgroundColor: '#AAffff',
        borderWidth: 1
    },
    viewTwo: {
        height: 60,
        width: 60,
        padding: 20,
        borderColor: 'red',
        borderWidth: 1,
        backgroundColor: '#ffAAff',
        alignSelf: 'flex-end'
    },
    viewThree: {
        height: 60,
        width: 60,
        padding: 20,
        borderColor: 'red',
        backgroundColor: '#ffffAA',
        borderWidth: 1
    }
})