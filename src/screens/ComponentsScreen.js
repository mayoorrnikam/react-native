import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

 const ComponentScreen  = (props) => {

    const greeting = "Hello"
    const StringArray = ['adf', 'afds', 'vwefg']
    const intArray = [1,2,3]

    return <View>
        
        <Text style= {texComponentStyle.textStyle}>This is the Components Screen</Text>
        <Text> {greeting} </Text>
        <Text> {StringArray} </Text>
        <Text> {intArray} </Text>

        <TouchableOpacity
        style = {buttonStyle.touchableOpacitybuttonStyle}
        // onPress={()=> {
        //     console.log('Go To List Screen button pressed.');
        //     props.navigation.navigate("ListScreen")
        // }}
        onPress={()=> onPressCalled(props,"ListScreen")}
        >
            <Text> Go to List Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style = {buttonStyle.touchableOpacitybuttonStyle}
        onPress={()=> {
            console.log('Go To Practice Component Screen');
            props.navigation.navigate("PractComponent")
        }}
        
        >
            <Text> Go To Practice Component Screen </Text>
        </TouchableOpacity>

    </View>
 };

 const texComponentStyle = StyleSheet.create({
     textStyle: {
        fontSize: 30,
        textAlign: "center"
     },
 });

 const buttonStyle = StyleSheet.create({

    touchableOpacitybuttonStyle: {
       margin:40,
       paddingTop: 5,
       paddingStart: 20,
       paddingEnd: 20,
       paddingBottom: 5,
       backgroundColor: "#DDDDDD",
     },
    
});

const onPressCalled = (props, screenName) => {
    console.log('Go To {screenName} Screen button pressed.');
    props.navigation.navigate(screenName)
}

 export default ComponentScreen;

