import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ results, navigation }) => {  
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.conatiner} >
      <FlatList
        showsVerticalScrollIndicator={true}
        numColumns={2}
        scrollEnabled={true}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
            return (
              <TouchableOpacity 
                onPress={() => navigation.navigate('ResultsShow', { id: item.id })} 
                style={{ justifyContent: "space-between" }}>
                <ResultsDetail result={item} />
              </TouchableOpacity>
            );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  },
  conatiner: {
    marginBottom: 10,
    flex: 1
    // borderBottomWidth: 1
  }
});

export default withNavigation(ResultsList);
