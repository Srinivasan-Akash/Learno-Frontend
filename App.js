// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Dimensions } from 'react-native';
// var {vw, vh, vmin, vmax} = require('react-native-viewport-units');
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
// import { ScrollView } from 'react-native-web';
import { Image, ScrollView, Text , TextInput} from 'react-native';
// import { TextInput } from 'react-native-web';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

const win = Dimensions.get('window'); 
 
const styles = StyleSheet.create({
  centering :{
    flex:1,
    justifyContent : 'center',
    marginTop : 0,
    borderWidth: 20,
    borderColor :'red',
    alignItems: 'center' 
  },
  maintext : {
    flex:1,
    justifyContent : 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    minHeight : 2000
  } ,
  textinputstyle : {
    borderWidth : 2,
    width: '90%',
    padding: 1
  }
})
export default function App() {
  return (
    <ScrollView >
      <View style  = {styles.centering} >
   <Text > Find my tutor</Text>
   <Text > Enter your name</Text>
   <TextInput style  = {styles.textinputstyle} placeholder = " your name"/>
    </View>
    <View style = { styles.maintext} > 
    <Text > A one stop solution to all your tutoring needs</Text>
    </View>
  </ScrollView>
  );
}


