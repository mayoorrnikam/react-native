import React from "react";
import {View, Text, StyleSheet} from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
   return <View style={styles.marginLayout}>
        <Text style={styles.text} >This is a new Image Screen</Text>
        <ImageDetails 
            title={"Forest"} 
            imageSource={require('../../assets/forest.jpg')}
            imageScore= {"5"}/>

        <ImageDetails 
            title={"beach"} 
            imageSource={require('../../assets/beach.jpg')}
            imageScore= {"6"}/>
        
        <ImageDetails 
            title={"Mountain"} 
            imageSource={require('../../assets/mountain.jpg')}
            imageScore= {"1"}/>

    
    </View>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 24
    },

    marginLayout:{
        margin: 14,
        padding: 14
    }
})
export default ImageScreen;

