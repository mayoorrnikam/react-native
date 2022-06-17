import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native"


const CounterScreen = () => {
    const [counter, setCounter] = useState(0)

    return <View>

        <Text style={styles.counterTitle}> Current Count </Text>

        <Text style={styles.counterText}> {counter} </Text>


        <View style={styles.buttonStyle}>
            <Button
                title=" Increase +"
                onPress={() => {
                    setCounter(counter + 1)
                }}
            />
        </View>

        <View style={styles.buttonStyle}>
            <Button
                title=" Decrease -"
                onPress={() => {
                    setCounter(counter - 1)
                }}
            />
        </View>

        <View style={styles.buttonStyle}>
            <Button
                title=" Reset"
                onPress={() => {
                    setCounter(0)
                }}
            />
        </View>

    </View>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        margin: 20
    },
    counterTitle: {
        fontSize: 30,
        marginStart: 80,
        marginEnd: 80,
    },
    counterText: {
        fontSize: 50,
        marginStart: 160,
        marginEnd: 160,
        marginTop: 10,
        marginBottom: 10
    },
    buttonStyle: {
        fontSize: 20,
        marginStart: 50,
        marginEnd: 50,
        marginTop: 10,
        marginBottom: 10
    }
});

export default CounterScreen
