import React,{ useState } from 'react';
import { View,TouchableOpacity,Text,StyleSheet } from 'react-native';
import { widthPercentageToDP,heightPercentageToDP,fontSizePercentage } from "../../helpers/pixelRatios";
import { fontFamily,colors,fontSize } from "../../fonts";

const login = (props) => {
  return (
    <View
    style={styles.viewHorizontal}
    >
      <TouchableOpacity onPress={()=>props.setOption("entrar")} style={[styles.view,{borderBottomWidth : 2,borderColor:props.option === "entrar"?colors.laranja :colors.secundary,paddingBottom:6}]}>
        <Text style={[styles.textOption,{color : props.option === "entrar" ?"#F2994A":"white"}]}>ENTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>props.setOption("cadastrar")} style={[styles.view,{alignItems:"flex-end",borderBottomWidth : 2,borderColor: props.option==="cadastrar"?colors.laranja : colors.secundary,paddingBottom:6}]}>
      <Text style={[styles.textOption,{color : props.option === "cadastrar"?"#F2994A" : "white"}]}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  )
}

export default login;
const styles = StyleSheet.create({
   viewHorizontal : {
     height : heightPercentageToDP(10),
     flexDirection : "row",
     alignItems : "center",
     width : widthPercentageToDP(78),
     justifyContent : "space-between",
     marginBottom:18,
   },
   view : {
     flex:1
   },
   textOption : {
     fontSize : fontSize.medium,
     color : "white",
     fontFamily : fontFamily.fontFamilyMedium
   }
     
})