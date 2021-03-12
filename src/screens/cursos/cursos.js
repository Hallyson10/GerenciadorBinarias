import React from 'react';
import { View,StyleSheet } from 'react-native';
import { Header } from "../../componentes";
import { WebView } from "react-native-webview";

const cursos = () => {
  return (
      <View style={styles.container}>
          <Header
        backColor="#FFF"
        back
        title="Curso Nível Aprendiz"
         />
         <WebView
             source={{uri : "https://www.youtube.com/watch?v=JGwWNGJdvx8&list=PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj"}}
         />
      </View>
  )
}

export default cursos;

const styles = StyleSheet.create({
    container : {
        flex:1,backgroundColor : "black"
    },
})