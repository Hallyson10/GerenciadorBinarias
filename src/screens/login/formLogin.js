import React from 'react';
import { View, TextInput,StyleSheet } from 'react-native';
import { widthPercentageToDP,heightPercentageToDP,fontSizePercentage } from "../../helpers/pixelRatios";
import { fontFamily,colors,fontSize } from "../../fonts";

const login = (props) => {
  return (
    <View style={styles.container}>
    <TextInput
      style={[styles.textInput,{borderBottomWidth : 1,
      borderColor : 'rgba(242, 242, 242, 0.4)'}]}
      placeholder="Email"
      autoCapitalize="none"
      placeholderTextColor='rgba(242, 242, 242, 0.4)'
      value={props.email}
      onChangeText={(text)=>props.onChangeEmail(text)}
    />
    <TextInput
      style={[styles.textInput]}
      placeholder="Senha"
      placeholderTextColor='rgba(242, 242, 242, 0.4)'
      value={props.senha}
      onChangeText={(text)=>props.onChangeSenha(text)}
      secureTextEntry
    />
  </View>
  )
}

export default login;

const styles = StyleSheet.create({
    container : { 
     width : widthPercentageToDP(80),  
     backgroundColor:colors.secundary,
     height : heightPercentageToDP(20),
     borderRadius : 20,
   },
   textInput : {
     flex:1,
     color : "white",
     fontSize : fontSizePercentage(20),
     fontFamily : fontFamily.fontFamilyRegular,
     marginHorizontal:18
   },
   view : {
     flex:1
   },
     
})