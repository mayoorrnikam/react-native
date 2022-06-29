import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ResultsDetails from './ResultsDetails'

const ResultsList = ({ title, resultsList }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{title} ({resultsList.length})</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={resultsList}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return <ResultsDetails result={item} />
                }}
            />
        </View>
    )
}

export default ResultsList

const styles = StyleSheet.create({
    container: {
        marginVertical: 5
    },
    titleText: {
        fontSize: 20,
        marginVertical: 5,
        marginLeft: 10,
        fontWeight: 'bold'
    }
})