import React from "react";
import {View, Text, Image, StyleSheet} from "react-native"

const ImageDetails = props => {
    return <View>
        <Image source={props.imageSource}/>
        <Text style={styles.text} > Beautiful {props.title}!!</Text>
        <Text style={styles.text}> Image score - {props.imageScore} </Text>
        </View>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24
    }
})

export default ImageDetails