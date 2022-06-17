import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return <View>
        <Text style={styles.colorTitle}>{color}</Text>
        <View style={styles.buttonViewStyle}>
            <Button
                title={`Increase ${color}`}
                onPress={() => {
                    onIncrease()
                }}
            />
        </View>
        <View style={styles.buttonViewStyle}>
            <Button
                title={`Decrease ${color}`}
                onPress={() => {
                    onDecrease()
                }}
            />
        </View>

    </View>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    },
    colorTitle: {
        fontSize: 20,
        marginStart: 20,
        marginEnd: 80,
    },
    buttonViewStyle: {
        marginTop: 5,
        marginStart: 20,
        marginEnd: 20,
        marginBottom: 5
    }
})

export default ColorCounter 