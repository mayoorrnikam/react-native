import { StyleSheet, Text, ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';
import useYelpResults from '../hooks/useYelpResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchYelpApi, setErrorMessage, setResults, results, errorMessage] = useYelpResults()

    const filterResultsByPriceList = (price) => {
        //price = $ || $$ || $$$
        return Array.isArray(results) ? results.filter(result => {
            //There are some results who have result.price is undefined.
            //Big Spender filter will have equal to or more than $$$ sign resturants
            return (price === '$$$') ? result.price >= price : result.price === price;
        }) : [];
    }

    const filterResultsByRatingList = () => {
        //rating >= 4.5
        return Array.isArray(results) ? results.filter(result => {

            return (result.rating >= 4.5)
        }) : [];
    }

    return (
        <View style={styles.container}>
            <SearchBar
                searchTerm={searchTerm}
                onTermChange={newSearchTerm => setSearchTerm(newSearchTerm)}
                onTermSubmit={() => { setErrorMessage(''), searchYelpApi(searchTerm) }} />

            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList title='High Rated' resultsList={filterResultsByRatingList()} />
                <ResultsList title='Cost Effective' resultsList={filterResultsByPriceList('$')} />
                <ResultsList title='Bit Pricier' resultsList={filterResultsByPriceList('$$')} />
                <ResultsList title='Big Spender' resultsList={filterResultsByPriceList('$$$')} />
            </ScrollView>
        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flex: 1
    },
    location: {
        marginLeft: 5,
        fontSize: 14
    }
})
//rnfes shortcut for the basic implemetation of the screen.