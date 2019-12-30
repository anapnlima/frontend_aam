import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import { FontAwesome } from '@expo/vector-icons';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMsg] = useResults();

  const update = navigation.getParam('update');
  console.log(update)
  // FIXME update results when register screen navigate to this
  // if (update) {
  //   navigation.setParams({ update: false });
  //   setTerm('');
  // }

  return (
    <>
      <SearchBar 
        term={term} 
        onTermChange={newTerm => setTerm(newTerm)} 
        onTermSubmit={() => searchApi(term)}
        />
      {errorMsg ? <Text>Atenção: {errorMsg}</Text>: null}
      <ResultsList  
        results={results} 
      />
      <TouchableOpacity onPress={() => navigation.navigate('Register')} >
        <View style={styles.view} >
          <FontAwesome name="plus-circle" style={styles.icon} />
          <Text style={styles.textButton} >Cadastrar novo</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#AAA",
    width: "60%",
    alignSelf: "center",
    marginBottom: 15,
    padding: 10
  },
  icon: {
    fontSize: 32,
    marginRight: 15
  },
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default SearchScreen;
