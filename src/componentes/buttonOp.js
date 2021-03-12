import React from 'react';
import { TouchableOpacity,StyleSheet,Text } from 'react-native';
import { fontSizePercentage,heightPercentageToDP } from "../helpers/pixelRatios";
import { fontFamily } from "../fonts";

const botaoOption = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[{
      alignItems:"center",
      justifyContent:"center",
      flex:1,backgroundColor:props.color,
      height:heightPercentageToDP(22),
      minWidth:140,
      borderRadius : 10,
      margin:5
      },props.styles]}>
    <Text style={[styles.title,{textAlign:"center",fontWeight:"500"},props.titleStyle]}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default botaoOption;

const styles = StyleSheet.create({
    container : {
        borderRadius : 12,
        backgroundColor : "#f2f2f2",
        minWidth : 165,
        margin:5,
        alignItems: "center",
        justifyContent:"center"
    },
    title : {
        fontSize : fontSizePercentage(20),
        fontFamily : fontFamily.fontFamilyBold
    },
    subTitle : {
        fontSize :fontSizePercentage(18),
        fontFamily : fontFamily.fontFamilyRegular
    }
})