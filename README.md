# WordAnalyzer
First of all, I created three variables and assign each of them a value:
  word: '', //The only input for this code
  consonant: "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ",
  vowel: "aeiouAEIOU",
 
Then I used the countChar() to replace the SplitString function to count the occurrences of the C character in the string.
I also used countVowel() and countConsonant() functions to count the vowel and consonants. In the two functions, I used for statement for loops and iteration.

Below is my App.js code:
 
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput  } from 'react-native';

  
export default class App extends Component {  
    constructor() {  
        super();  
        this.state = {
          //declaring variables
          word: '',
          consonent: 0,
          vowel: 0,
          character: 0
        };  
    }  
    //function to count the occurrences of the C character in the string
    countChar(){

      let str=this.state.word;
      var total_char = str.length;

      this.setState({

          character: total_char

          });
    }
  //function for counting the number vowels in the string
  countVowel(){
  
  var listvowel = 'aeiouAEIOU';
  var vcount = 0;
  var str = this.state.word;
  
  for(var x = 0; x < str.length ; x++)
  {
    if (listvowel.indexOf(str[x]) !== -1)
    {
      vcount += 1;
    }

    this.setState({

        vowel: vcount

        });
  }

  }
   //function for counting the number consonants in the string
  countConsonant(){
  
    var listconsonant = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    var ccount = 0;
    var str = this.state.word;
    
    for(var x = 0; x < str.length ; x++)
    {
      if (listconsonant.indexOf(str[x]) !== -1)
      {
        ccount += 1;
      }
  
      this.setState({
  
          consonant: ccount
  
          });
    }
  
    }

    
    render() {  
        return (  
          
            <View style={styles.container}>  

             <Text style={styles.header}>WORD ANALYZER {"\n"} </Text>

                <TextInput
                  style={styles.textinput}
                  value={this.state.word}
                  placeholder="Enter word"  
                  onChangeText={word => this.setState({word})}
                />
               

                <Button title="Analyze" color="#EFED67" onPress={() => {this.countChar(), this.countVowel(), this.countConsonant()}}/>
                

              <Text style={styles.contents}>Word is: {this.state.word}</Text>
              <Text style={styles.contents}>No of Consonants: {this.state.consonant} </Text>
              <Text style={styles.contents}>No of Vowels: {this.state.vowel} </Text>
              <Text style={styles.contents}>No of Characters: {this.state.character} </Text> 
                
            </View>  
        );  
    }  
}  
//CSS part
const styles = StyleSheet.create({ 
  container: {
  flex: 1,
  justifyContent: 'flex-start', 
  alignItems: 'center', 
  backgroundColor: '#EB85AF',

  }, 
  
  header: {
  marginTop: 200,
  fontSize: 50, 
  fontFamily: 'Courier New',
  textAlign: 'center', 
  margin: 10,
  marginBottom: 10,
  },
 
  contents: {
  textAlign: 'center', 
  marginTop: 20,
  fontFamily: 'Helvetica',
  color: '#333333', 
  marginBottom: 5,
  },

  textinput: {
  height: 60, 
  textAlign: 'center', 
  width: 300,
  borderColor: '#4B0B47', 
  borderWidth: 5 ,
  marginBottom: 10
 },

})
