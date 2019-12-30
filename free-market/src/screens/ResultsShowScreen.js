import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, FlatList, Image } from 'react-native';
import backend from '../api/backend';

const ResultsShowScreen = ({ navigation }) => {  
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await backend.get(`/products/product/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.conatiner} >
      {/* <FlatList 
        horizontal
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }}
      /> */}
      { !result.imageURL ?
        null
        : <Image style={styles.image} source={{ uri: result.imageURL }} />
      }
      <Text style={styles.name} >{result.name}</Text>
      <Text style={styles.description} >{result.description}</Text>
      <Text style={styles.price} >R$ {result.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    margin: 15
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 15,
    alignSelf: "center",
    width: "60%"
  },
  description: {
    fontSize: 15,
    marginBottom: 15,
    alignSelf: "flex-start",
    width: "90%"
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    alignSelf: "center"
  },
  image: {
    marginTop: 5,
    marginBottom: 5,
    width: 225,
    height: 230
  }
});

export default ResultsShowScreen;