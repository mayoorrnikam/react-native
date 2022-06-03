import React from "react";
import { Text, View, StyleSheet } from "react-native";

const PracticeComponent = () => {
    const name = "Mayur"
    return <View>
        <Text style = {PracticeComponentStyle.headerStyle}>
                Getting Started with React Native!
        </Text>

        <Text  style = {PracticeComponentStyle.subHeaderStyle}>
                My Name is {name}
        </Text>
    </View>
}

const PracticeComponentStyle = StyleSheet.create({
    headerStyle: {
        fontSize: 40
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default PracticeComponent;