import { StyleSheet, Text, Button, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';
import useYelpResults from '../hooks/useYelpResults';


const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchYelpApi, setErrorMessage, setResults, results, errorMessage] = useYelpResults()

    return (
        <View style={styles.background}>
            <Text>SearchScreen</Text>
            <SearchBar
                searchTerm={searchTerm}
                onTermChange={newSearchTerm => setSearchTerm(newSearchTerm)}
                onTermSubmit={() => { setErrorMessage(''), setResults(0), searchYelpApi(searchTerm) }} />

            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text> We have found {results.length} results</Text>
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