import React from 'react';
import { View, TextInput,StyleSheet } from 'react-native';
import { widthPercentageToDP,heightPercentageToDP,fontSizePercentage } from "../../helpers/pixelRatios";
import { fontFamily,colors,fontSize } from "../../fonts";

const register = (props) => {
  return (
    <View style={styles.container}>
    <TextInput
      style={[styles.textInput,{
        borderBottomWidth : 1,
        borderColor : 'rgba(242, 242, 242, 0.4)',}]}
      placeholder="Nome"
      placeholderTextColor='rgba(242, 242, 242, 0.4)'
      value={props.nome}
      onChangeText={(text)=>props.onChangeNome(text)}
      autoCapitalize="words"
    />
    <TextInput
      style={[styles.textInput,{borderBottomWidth : 1,
        borderColor : 'rgba(242, 242, 242, 0.4)',
        }]}
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

export default register;

const styles = StyleSheet.create({
    container : { 
     width : widthPercentageToDP(80),
     backgroundColor:colors.secundary,
     height : heightPercentageToDP(26),
     borderRadius : 20,
   },
   textInput : {
     flex:1,
     marginHorizontal :18,
     color : "white",
     fontSize : fontSize.medium,
     fontFamily : fontFamily.fontFamilyRegular
   },
   view : {
     flex:1
   },
     
})