# WordAnalyzer
First of all, I create six variables and assign each of them a value:
  word: 0, //The only input for this code
  consonant: "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ",
  vowel: "aeiouAEIOU",
  characterr: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", //I used double 'r' because the word character itself has its own meaning in the language
  ccount: 0, //Character count
  vcount: 0, //Vowel count
  chacount: 0 //Character count
  
Then I used the SplitString function to convert a word into an array of characters.
I used for loop for the three variables which are consonant, vowel and character.
For the render part and CSS part, I just use back the BMI Calculator code and change the variables.
 
Below is my App.js code //I could not run the code because I have an error on the CSS part, it says I could not use the word 'const' 
 
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
