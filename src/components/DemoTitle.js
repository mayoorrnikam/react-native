import React from "react";
import { View, Text, StyleSheet } from "react-native"

const DemoTitle = ({ title }) => {
    return <View>
        <Text style={styles.textMargin}>{title}</Text>
    </View>
}

const styles = StyleSheet.create({
    textMargin: {
        fontSize: 18,
        margin: 20
    }
})

export default DemoTitle;