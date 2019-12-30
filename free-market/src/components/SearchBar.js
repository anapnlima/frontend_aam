import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.view} >
     <FontAwesome name="search" style={styles.icon} />
     <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input} 
        placeholder="Search"
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={onTermSubmit}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10
  },
  input: {
    // borderColor: '#CCCCCC',
    // borderWidth: 1,
    flex: 1,
    fontSize: 18
  },
  icon: {
      fontSize: 35,
      alignSelf: 'center',
      marginHorizontal: 15
  }
});

export default SearchBar;
