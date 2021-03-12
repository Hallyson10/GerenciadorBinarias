import React from 'react';
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native';
import { fontFamily,colors,fontSize } from "../fonts";

const componentes = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress ? props.onPress : null} style={[styles.container,props.styles]}>
        <Text style={styles.title}>{props.title}</Text>
        {props.subTitle ? <Text style={styles.subTitle}>{props.subTitle}</Text> : null}
    </TouchableOpacity>
  )
}

export default componentes;

const styles = StyleSheet.create({
    container : {
        borderRadius : 12,
        backgroundColor : colors.secundary,flex:1,
        margin:5,
        alignItems: "center",
        justifyContent:"center",
        maxHeight : 60
    },
    title : {
        fontSize : fontSize.semi_small,
        fontFamily : fontFamily.fontFamilyBold,
        color : "white"
    },
    subTitle : {
        fontSize :fontSize.small,
        fontFamily : fontFamily.fontFamilyRegular,
        color : "white"

    }
})