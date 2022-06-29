import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultsDetails from './ResultsDetails'
import { withNavigation } from 'react-navigation'

const ResultsList = ({ title, resultsList, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{title} ({resultsList.length})</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={resultsList}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ResultShow')}>
                            <ResultsDetails result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default withNavigation(ResultsList)

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