import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/icon.png')}/>
        <TouchableOpacity 
          onPress={() =>
            this.props.navigation.navigate('MainOptionsScreen')
          }
          style={styles.button}
        >
          <Text
            style={styles.buttonText}
          >Reddito di Cittadinanza</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  image: {
    resizeMode: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    alignItems: 'center',
    backgroundColor: '#215c84',
    padding: 10,
    borderRadius: 5
  },
  buttonText :{
    fontFamily: 'Titillium Web',
    color: '#fff',
    fontSize: 18,
  }
});

