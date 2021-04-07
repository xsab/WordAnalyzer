import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';

export default class App extends Component {

    constructor(){
      super();
      this.state = {
        word: 0, 
        consonant: "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ",
        vowel: "aeiouAEIOU",
        characterr: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        ccount: 0,
        vcount: 0,
        chacount: 0
      }
    }
  
    wordAnalyzer = () => {
      this.setState({word: character})

          function StringsSplit() {
          for(x = 0; x<str.length; x++){
            for(y = 0; y<consonant.length; y++){
              if(str[x]==consonant[y])
              {
                ccount++;
              }
            }
            for(z = 0; z<vowel.length; z++){
              if(str[x]==vowel[z])
              {
                vcount++;
              }
            } 
            for(h = 0; h<characterr.length; h++){
              if(str[x]==characterr[h])
              {
                chacount++;
              }
            }
      };
  }
    }

render() {
  return (
  <View style={styles.container}>
    <Text style={styles.welcome}>Word Analyzer</Text>
     <TextInput style={styles.label} onChangeText={(word) => this.setState({word})} 
     placeholder='Word'/>
  <Button color="#841584"
  onPress={this.wordAnalyzer}
  title='Analyze'/>
  <Text style={styles.welcome}>Word: {this.state.word}</Text>
  <Text style={styles.welcome}>Consonant: {this.state.ccount}</Text>
  <Text style={styles.welcome}>Vowel: {this.state.vcount}</Text>
  <Text style={styles.welcome}>Character: {this.state.chacount}</Text>
  </View>
  );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign:'center',
      margin: 10,
    },
    label: {
      textAlign:'center',
      color: '#333333',
      marginBottom: 5,
    }
    });
 }