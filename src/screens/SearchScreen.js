import { StyleSheet, Text, Button, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';


const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <View style={styles.background}>
            <Text>SearchScreen</Text>
            <SearchBar
                searchTerm={searchTerm}
                onTermChange={newSearchTerm => setSearchTerm(newSearchTerm)}
                onTermSubmit={() => { console.log(searchTerm) }} />
            <Text> Input Text: {searchTerm}</Text>
        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#FFF",
        flex: 1
    }
})
//rnfes shortcut for the basic implemetation of the screen.