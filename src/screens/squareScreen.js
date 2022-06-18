import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'
import DemoTitle from '../components/DemoTitle'

const COLOR_INCREMENT = 15

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const setColor = (color, change) => {
        // color ==== 'red' or 'green' or 'blue'
        // change === +15 or -15

        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
                return;

            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                return;

            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
                return;
            default:
                return;

        }
    }

    return <View>
        <DemoTitle title={"Generate random color square with State Management"} />

        <Text style={styles.text} > Red: {red}, Green: {green}, Blue: {blue}</Text>
        <ColorCounter
            color="Red"
            onIncrease={() => setColor('red', COLOR_INCREMENT)}
            onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
        />

        <ColorCounter
            color="Green"
            onIncrease={() => setColor('green', COLOR_INCREMENT)}
            onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
        />

        <ColorCounter
            color="Blue"
            onIncrease={() => setColor('blue', COLOR_INCREMENT)}
            onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
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
    </View >
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        margin: 16
    }
})

export default SquareScreen;