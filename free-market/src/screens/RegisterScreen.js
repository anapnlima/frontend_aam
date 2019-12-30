import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';
// import * as ImagePicker from 'expo-image-picker';
// import ImagePicker from 'react-native-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import backend from '../api/backend';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState('');

  console.log(name, price, description);

  // FIXME both options dit not work
  // const handleChoosePhoto = () => {
  //   const options = { };
  //   ImagePicker.launchImageLibrary(options, result => {
  //     console.log(result);
  //   });
  // };
  // const handleChoosePhoto = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1
  //   });
    
  //   console.log(result);

  //   if (!result.cancelled) {
  //     this.setPhotos(result.uri);
  //   }
  // };

  const register = async (id) => {
    const response = await backend.post('/products', {
        name,
        description,
        price
     }, {
       headers: {

       }
     });
     console.log(response.data);
    if (response.data === 'sucess') {
      navigation.navigate('Search');
    }
  };

  return (
  <View style={styles.conatiner} >
    <Text style={styles.caption} >Nome do produto</Text>
    <TextInput 
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={(newValue) => setName(newValue)}
    />
    <Text style={styles.caption} >Preço</Text>
    <TextInput 
      style={styles.input}
      keyboardType='numbers-and-punctuation'
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={(newValue) => setPrice(parseFloat(newValue))}
    />
    <Text style={styles.caption} >Descrição</Text>
    <TextInput 
      style={styles.inputArea}
      autoCapitalize="none"
      autoCorrect={false}
      numberOfLines={5}
      onChangeText={(newValue) => setDescription(newValue)}
    />
    <Text style={styles.caption} >Fotos</Text>
    <TouchableOpacity onPress={() => {}} >
      <View style={styles.viewTouchableUpload} >
        <FontAwesome name="photo" style={{fontSize: 24, marginRight: 10}} />
        <Text style={{fontSize: 16, fontWeight: "bold", textAlign: "center"}} >Upload</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {register()}} >
      <View style={styles.viewTouchableRigister} >
        <FontAwesome name="check-circle" style={styles.icon} />
        <Text style={styles.textButton} >Cadastrar</Text>
      </View>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    marginHorizontal: 15,
    marginTop: 30,
    justifyContent: "center"
  },
  caption: {
    fontSize: 14,
    color: "#BBB",
    marginBottom: 4
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#BBB',
    marginBottom: 6,
    padding: 3,
    width: '100%',
    top: 2
  },
  inputArea: {
    borderWidth: 2,
    borderColor: '#BBB',
    marginBottom: 6,
    padding: 3,
    width: '100%',
    top: 2
  },
  viewTouchableUpload: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#AAA",
    width: "40%",
    alignSelf: "flex-start",
    marginBottom: 15,
    marginTop: 15,
    padding: 10
  },
  viewTouchableRigister: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#AAA",
    width: "60%",
    alignSelf: "center",
    marginBottom: 15,
    marginTop: 15,
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

export default withNavigation(RegisterScreen);