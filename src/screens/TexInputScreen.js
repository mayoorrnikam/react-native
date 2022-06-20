import React, { useState } from 'react'
import { View, Button, TextInput, StyleSheet, Text } from 'react-native'
import DemoTitle from '../components/DemoTitle'



const TextInputScreen = () => {
    const [name, setName] = useState('')

    return (
        <View>
            <DemoTitle title="This is a simple Text Input demo" />
            <Text style={styles.text}>Enter Name </Text>
            <TextInput
                style={styles.textInput}
                autoCapitalize='none'
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => { setName(newValue) }}
            />
            <Text style={styles.text}>Your Name is {name}</Text>

            <View style={styles.buttonViewStyle}>
                <Button
                    title='Reset Text Input'
                    onPress={() => { setName('') }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        margin: 10,
        fontSize: 20
    },
    textInput: {
        margin: 10,
        borderColor: 'blue',
        borderWidth: 1,
        fontSize: 20
    },
    buttonViewStyle: {
        marginTop: 5,
        marginStart: 20,
        marginEnd: 20,
        marginBottom: 5
    },
})

export default TextInputScreen;