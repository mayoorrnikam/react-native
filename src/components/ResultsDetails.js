import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'

const ResultsDetails = ({ result }) => {
  return (
    <View style={styles.resultstyle}>
      <Image style={styles.image} source={result.image_url ? { uri: result.image_url } : null} />
      <Text style={styles.resultTitle}>{result.name} </Text>
      <View>
        <Text style={styles.resultDescription}>{result.rating} Stars, {result.review_count} Reviews</Text>
        {result.location ? <Text >{result.location.address1 + " " + result.location.city + ", " + result.location.zip_code}</Text> : null}
      </View>
    </View>
  )
}

export default ResultsDetails

const styles = StyleSheet.create({
  resultstyle: {
    margin: 5,
    padding: 5
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 10
  },
  resultTitle: {
    marginVertical: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultDescription: {
    fontSize: 16,
  }
})