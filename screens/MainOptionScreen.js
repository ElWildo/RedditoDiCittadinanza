import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class MainOptionsScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };
    render() {
        return (
          <View style={styles.container}>
              <Text
                style={styles.text}
              >Scopri se puoi ottenere accesso al</Text>
              <Text
                style={styles.text}
              >Reddito di Cittadinanza</Text>
              <Text></Text>
              <Text
                style={styles.text}
              >Hai un lavoro?</Text>
            <View style={styles.containerButtons}>
            <TouchableOpacity 
              onPress={() =>
                this.props.navigation.navigate('StocaScreen')
              }
              style={styles.button}
            >
              <Text
                style={styles.buttonText}
              >Si</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() =>
                this.props.navigation.navigate('CFScreen')
              }
              style={styles.button}
            >
              <Text
                style={styles.buttonText}
              >No</Text>
            </TouchableOpacity>
            </View>
          </View>
        );
      }
}

 

const styles = StyleSheet.create({
  table:{
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    margin: 5,
  },
  row:{
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftCellA:{
    flex:1,
    alignItems: 'flex-start',
    backgroundColor: '#ffff99',
    padding: 5,
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  rightCellA:{
    flex:1,
    alignItems: 'flex-end',
    backgroundColor: '#ffcc99',
    padding: 5,
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  leftCellB:{
    flex:1,
    alignItems: 'flex-start',
    backgroundColor: '#ffff66',
    padding: 5,
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  rightCellB:{
    flex:1,
    alignItems: 'flex-end',
    backgroundColor: '#ff9933',
    padding: 5,
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButtons: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button:{
    alignItems: 'center',
    backgroundColor: '#215c84',
    width: 50,
    padding: 10,
    borderRadius: 5,
    margin: 5
  },
  buttonText :{
    fontFamily: 'Titillium Web',
    color: '#fff',
    fontSize: 18,
  },
  text :{
    fontFamily: 'Titillium Web',
    color: '#262626',
    fontSize: 18,
    textAlign: 'center'
  },
  texTab :{
    color: '#808080',
    fontSize: 16,
  },
  textinput:{
    borderRadius: 5,
    backgroundColor: '#ffff99',
    margin: 15,
    alignSelf: 'stretch',
    height: 40,
    padding: 10
  }
});