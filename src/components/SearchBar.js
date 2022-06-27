import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { Feather, EvilIcons } from '@expo/vector-icons'

const SearchBar = ({ searchTerm, onTermChange, onTermSubmit }) => {

  return (
    <View style={styles.backgroundStyle}>
      <Feather
        style={styles.searchIconStyle}
        name='search'
      />
      <TextInput
        style={styles.inputStyles}
        placeholder='Search'
        autoCapitalize='none'
        autoCorrect={false}
        value={searchTerm}
        onChangeText={updatedSearch => onTermChange(updatedSearch)}
        onEndEditing={() => onTermSubmit()} //{onTermSubmit} will also work here.
      />
      <EvilIcons
        style={styles.closeIconStyle}
        name='close'
        onPress={() => { onTermChange('') }}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  backgroundStyle: {
    height: 50,
    margin: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    borderWidth: '1',
    borderColor: 'red',
    backgroundColor: "#F0EEEE",
    flexDirection: 'row'

  },
  searchIconStyle: {
    fontSize: 36,
    alignSelf: 'center'
  },
  inputStyles: {
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#F0EEEE",
    flex: 1,
    fontSize: 18
  },
  closeIconStyle: {
    fontSize: 30,
    alignSelf: 'center'
  }
})