import React from "react";
import { View, Text, Image, StyleSheet } from "react-native"

const ImageDetails = ({ imageScore, title, imageSource }) => {
    return <View>
        <Image source={imageSource} />
        <Text style={styles.text} > Beautiful {title}!!</Text>
        <Text style={styles.text}> Image score - {imageScore} </Text>
    </View>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24
    }
})

export default ImageDetails