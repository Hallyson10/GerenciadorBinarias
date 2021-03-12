import React from 'react';
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native';
import { fontSizePercentage,widthPercentageToDP,heightPercentageToDP } from "../helpers/pixelRatios";
import { Fontisto } from "@expo/vector-icons";
import { fontFamily,colors } from "../fonts";

const componentes = (props) => {
  return (
      <View style={styles.container}>
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Fontisto
                name="telegram"
                size={50}
                color="#419fd9"
            />
      </View>
      <View style={{flex:2}}>
      <Text style={[styles.title,{marginTop:10,}]}>
              COMUNIDADE LUCRITO
          </Text>
          <Text style={styles.subTitle}>
              Eii! nós estamos no Telegram! bora?
          </Text>
      </View>
      <View style={{flex:1.5,alignItems:"center",justifyContent:"center",marginRight:4}}>
        <TouchableOpacity onPress={props.onPress} style={styles.buttonEntrar}>
            <Text style={[styles.title,{color:"white"}]}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
          
      </View>
  )
}

export default componentes;

const styles = StyleSheet.create({
        container : {
            flexDirection : "row",
            justifyContent : "space-around",
            backgroundColor : "white",
            height : heightPercentageToDP(14),
            margin : 20,
            borderRadius : 14
        },
        view : {
            flex:1
        },
        buttonEntrar : {
            backgroundColor : colors.secundary,
            alignItems : "center",
            justifyContent : "center",
            flex:1,
            maxWidth : widthPercentageToDP(28),
            maxHeight : heightPercentageToDP(7),
            minWidth : widthPercentageToDP(28),
            minHeight : heightPercentageToDP(7),
            borderRadius:4
        },
        title : {
            fontFamily : fontFamily.fontFamilyBold,
            fontSize : fontSizePercentage(15),
            color : "black",
            flexWrap : "wrap"
        },
        subTitle : {
            fontFamily : fontFamily.fontFamilyRegular,
            fontSize : fontSizePercentage(14),
            color : "black",
            flexWrap : "wrap"

        }
})