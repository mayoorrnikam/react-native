import { StyleSheet, Text, Button, View } from 'react-native'
import React, { useReducer } from 'react';
import DemoTitle from '../components/DemoTitle';

const COUNTER_TYPE = {
    Increase: "Increase",
    Decrease: "Decrease",
    Reset: "Reset"
}
const COUNTER_PAYLOAD = 1

const reducer = (state, { type, payload }) => {

    switch (type) {
        case COUNTER_TYPE.Increase:
            var increase = state.counter + payload
            return { ...state, counter: increase }
        case COUNTER_TYPE.Decrease:
            var decrease = state.counter - payload
            return { ...state, counter: decrease }
        case COUNTER_TYPE.Reset:
            return { ...state, counter: 0 }
        default:
            return state
    }
}


const CounterWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 })
    // const [counter] = state

    return (
        <View>
            <DemoTitle title={"Update counter with Reducer Hook"} />

            <Text style={styles.counterTitle}> Current Count </Text>

            <Text style={styles.counterText}> {state.counter} </Text>


            <View style={styles.buttonStyle}>
                <Button
                    title=" Increase +"
                    onPress={() => {
                        dispatch({ type: COUNTER_TYPE.Increase, payload: COUNTER_PAYLOAD })
                    }}
                />
            </View>

            <View style={styles.buttonStyle}>
                <Button
                    title=" Decrease -"
                    onPress={() => {
                        dispatch({ type: COUNTER_TYPE.Decrease, payload: COUNTER_PAYLOAD })
                    }}
                />
            </View>

            <View style={styles.buttonStyle}>
                <Button
                    title=" Reset"
                    onPress={() => {
                        dispatch({ type: COUNTER_TYPE.Reset, payload: COUNTER_PAYLOAD })
                    }}
                />
            </View>
        </View>
    )
}

export default CounterWithReducer

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
})