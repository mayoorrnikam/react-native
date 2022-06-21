
import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import DemoTitle from '../components/DemoTitle'

const PassportTextInputScreen = () => {
    const [password, setPassword] = useState('')

    return (
        <View>
            <DemoTitle title="This is a simple Password Text Input validation demo" />
            <Text style={styles.text}>Enter Password </Text>
            <TextInput
                style={styles.textInput}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                value={password}
                onChangeText={(changedValue) => setPassword(changedValue)}
            />

            {/* Following code dynamically adds the text view to the screen 
            based on the conditions. We are using the ternary operator to 
            check the conditions returning null here makes no change to the screen. */}
            {
                password.length <= 5 && password.length > 0
                    ? <Text style={styles.passwordAlertText}> Password should be minimum 5 chars.</Text>
                    : null
            }

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
    passwordAlertText: {
        fontSize: 16,
        color: 'red'
    },
})

export default PassportTextInputScreen;

