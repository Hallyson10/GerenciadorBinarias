import React from 'react';
import { TouchableOpacity,StyleSheet,Text,ActivityIndicator } from 'react-native';
import { fontSizePercentage } from "../helpers/pixelRatios";
import { fontFamily,fontSize } from "../fonts";

const botaoConfirmacao = (props) => {
  return (
    <TouchableOpacity disabled={props.atived ? true : false} onPress={props.onPress} style={[styles.container,props.styles]}>
        {props.loading ? <ActivityIndicator color="black"/> : <Text style={[styles.title,props.titleStyle]}>{props.title}</Text>}
        {props.subTitle ? <Text style={styles.subTitle}>{props.subTitle}</Text> : null}
    </TouchableOpacity>
  )
}

export default botaoConfirmacao;

const styles = StyleSheet.create({
    container : {
        borderRadius : 12,
        backgroundColor : "#f2f2f2",
        maxWidth : 200,
        minWidth : 200,
        maxHeight : 50,
        minHeight:50,
        alignItems: "center",
        justifyContent:"center",
        marginBottom:12,
        alignSelf: "center"
    },
    title : {
        fontSize : fontSize.medium,
        fontFamily : fontFamily.fontFamilyMedium
    },
    subTitle : {
        fontSize :fontSize.semi_small,
        fontFamily : fontFamily.fontFamilyRegular
    }
})