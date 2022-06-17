import React, { useState } from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { FlatList } from "react-native-gesture-handler";

const ColorScreen = () => {
    const [colors, setColors] = useState([])
    const [counter, setCounter] = useState(0)

    return <View>
        <View style={styles.buttonViewStyle}>
            <Button
                title='Add Color'
                onPress={() => {
                    //here three dots ...colors is coping all the elements of  
                    //existing colors array and adding the newly generated value 
                    // from randomRgb method to the colors array.
                    setColors([...colors, randomRgb()])
                    setCounter(counter + 1)
                }}
            />
            <Text> Total Colors generated: {counter} </Text>
        </View>


        <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item}
            data={colors}
            renderItem={({ item }) => {
                return (


                    <View style={{
                        height: 100,
                        width: 100,
                        backgroundColor: item,
                        marginTop: 5,
                        marginStart: 20,
                        marginEnd: 20,
                        marginBottom: 5
                    }} />


                );
            }}
        />
    </View>
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24
    },
    buttonViewStyle: {
        marginTop: 5,
        marginStart: 20,
        marginEnd: 20,
        marginBottom: 5
    }
})

export default ColorScreen