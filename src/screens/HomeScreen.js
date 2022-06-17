import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {
  return <View>
    <Text style={styles.headertext}>Home Screen APP</Text>

    <View style={styles.buttonViewStyle}>
      <Button
        title="Go To Component Screen"
        onPress={() => {
          console.log('Go To Component Screen button pressed.');
          navigation.navigate('Components')
        }}
      />
    </View>

    <View style={styles.buttonViewStyle}>
      <Button
        title=" Go To List Screen"
        onPress={() => {
          console.log('Go To List Screen button pressed.');
          navigation.navigate('ListScreen')
        }}
      />
    </View>

    <View style={styles.buttonViewStyle}>
      <Button
        title="Go To Practice Component Screen"
        onPress={() => {
          console.log('Go To Practice Component Screen button pressed.');
          navigation.navigate('PractComponent')
        }}
      />
    </View>

    <View style={styles.buttonViewStyle}>
      <Button
        title='Go To ImageScreen'
        onPress={() => {
          console.log('Go To ImageScreen button pressed.');
          navigation.navigate('Image')
        }}
      />
    </View>

    <View style={styles.buttonViewStyle}>
      <Button
        title='Go To CounterScreen Demo'
        onPress={() => {
          console.log('Go To CounterScreen Demo button pressed.');
          navigation.navigate('CntScreen')
        }}
      />
    </View>

    <Text style={styles.textMargin}>Above are the normal Button components in the react native which are basic components</Text>

    {/* <TouchableOpacity onPress={ ()=> {
      console.log('Go To List Screen button pressed.');
      props.navigation.navigate('ListScreen')
      }}>
        <Text style={styles.text} > Go To List Screen </Text>
    </TouchableOpacity> */}

  </View>
};

const styles = StyleSheet.create({
  headertext: {
    fontSize: 24,
    textAlign: 'center'
  },

  text: {
    fontSize: 16,
  },

  buttonViewStyle: {
    marginTop: 5,
    marginStart: 20,
    marginEnd: 20,
    marginBottom: 5
  },

  textMargin: {
    fontSize: 16,
    margin: 10
  }
});

export default HomeScreen;
