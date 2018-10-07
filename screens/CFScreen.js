import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { createStackNavigator } from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';

class StocaScreen extends React.Component {
  constructor(props){

    super(props);
    this.state ={
      cf: null
    }

  }
    render() {
        return (
          <View style={styles.container}>
              <Text
                style={styles.buttonText}
              >Inserisci qui il tuo codice fiscale</Text>
              <TextInput
                style={styles.textinput}
                placeholder = 'xxxxxxxxxxxxxxxxxxxxx'
                underlineColorAndroid = "transparent"
                value = {this.state.cf}
                onChangeText={(text) => this.setState({cf: text})}
              />
            <TouchableOpacity 
              onPress={() =>{
                this.props.navigation.navigate('EInveceScreen')
              }
              }
              style={styles.button}
            >
              <Text
                style={styles.buttonText}
              >Controlla la Disponibilità</Text>
            </TouchableOpacity>
          </View>
        );
      }
}

export default StocaScreen;

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
  button:{
    alignItems: 'center',
    backgroundColor: '#215c84',
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
  },
  texTab :{
    color: '#808080',
    fontSize: 16,
  },
  textinput:{
    borderRadius: 5,
    backgroundColor: '#e6e6e6',
    color: '#404040',
    margin: 15,
    alignSelf: 'stretch',
    height: 40,
    padding: 10
  }
});