import React, { useReducer } from "react";
import { View, Button, Text, StyleSheet } from "react-native"
import ColorCounter from "../components/ColorCounter";
import DemoTitle from "../components/DemoTitle";

const COLOR_INCREMENT = 15

const reducer = (state, action) => {
    // state === red:0, green:0, blue:0
    // action ==={ colorToChange: 'red' || 'green' || 'blue',
    //              amount: +15 || -15 }

    switch (action.colorToChange) {
        case 'red':
            var addition = state.red + action.amount
            return addition > 255 || addition < 0
                ? state
                : { ...state, red: addition }
        case 'green':
            var addition = state.green + action.amount
            return addition > 255 || addition < 0
                ? state
                : { ...state, green: addition }

        case 'blue':
            var addition = state.blue + action.amount
            return addition > 255 || addition < 0
                ? state
                : { ...state, blue: addition }
        default:
            return state
    }
}


const SquareColorScreenWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 })
    const { red, blue, green } = state

    return <View>
        <DemoTitle title={"Generate random color square with Reducer."} />
        <Text style={styles.text} > Red: {red}, Green: {green}, Blue: {blue}</Text>
        <ColorCounter
            color="Red"
            onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ colorToChange: 'red', amount: - 1 * COLOR_INCREMENT })}
        />

        <ColorCounter
            color="Green"
            onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
        />

        <ColorCounter
            color="Blue"
            onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
        />

        <View style={{
            alignItems: 'center', //Centered vertically
            flex: 1
        }}>
            <View
                style={
                    {
                        height: 150,
                        width: 150,
                        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                        marginTop: 5,
                        marginStart: 20,
                        marginEnd: 20,
                        marginBottom: 5
                    }
                }
            />

        </View>

    </View>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        margin: 16
    }
})

export default SquareColorScreenWithReducer;

