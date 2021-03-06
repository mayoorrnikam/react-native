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
        title='Update Counter Demo'
        onPress={() => {
          console.log('Update Counter Demo button pressed.');
          navigation.navigate('CounterChange')
        }}
      />
    </View>

    <View style={styles.buttonViewStyle}>
      <Button
        title='Update Counter With Reducer Demo'
        onPress={() => {
          console.log('Update Counter Demo button pressed.');
          navigation.navigate('CounterReducer')
        }}
      />
    </View>

    <View style={styles.buttonViewStyle}>
      <Button
        title='Generate Random Color Demo'
        onPress={() => {
          console.log('Generate Random Color Demo button pressed.');
          navigation.navigate('ColorChange')
        }}
      />
    </View>

    <View style={styles.buttonViewStyle}>
      <Button
        title='React UseState Hook Demo'
        onPress={() => {
          console.log('Generate Random Color Square Demo button pressed.');
          navigation.navigate('SquareWithState')
        }}
      />
    </View>

    <View style={styles.buttonViewStyle}>
      <Button
        title='React UseReducer Hook Demo '
        onPress={() => {
          console.log('Generate Random Color Square Demo button pressed.');
          navigation.navigate('SquareWithReducer')
        }}
      />
    </View>


    <View style={styles.buttonViewStyle}>
      <Button
        title='React Text-Input Demo '
        onPress={() => {
          console.log('Display Text from TextInput Demo pressed.');
          navigation.navigate('TextInputDemo')
        }}
      />
    </View>

    <View style={styles.buttonViewStyle}>
      <Button
        title='React Text-Input for Password Demo '
        onPress={() => {
          console.log('Display Password TextInput Demo pressed.');
          navigation.navigate('PasswordTextInput')
        }}
      />
    </View>

    <View style={styles.buttonViewStyle}>
      <Button
        title='React UI BoxScreen Demo '
        onPress={() => {
          console.log('Display UI BoxScreen Demo pressed.');
          navigation.navigate('UIBoxChanges')
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
