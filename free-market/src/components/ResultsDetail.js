import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';


const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container} >
      { !result.imageURL ?
        null :
        <Image style={styles.image} source={{ uri: result.imageURL }} />
      }
      <Text style={styles.name} >{result.name}</Text>
      <Text style={styles.price} >R$ {result.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15
  },
  image: {
    width: 170,
    height: 135,
    marginBottom: 5,
    alignSelf: "center",
    resizeMode: "contain"
  },
  price: {
    fontWeight: "bold",
    alignSelf: "center"
  },
  name: {
    width: 155,
    alignSelf: "center",
    textAlign: "center"
  }
});

export default ResultsDetail;
