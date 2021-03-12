import React from 'react';
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { widthPercentageToDP,heightPercentageToDP,fontSizePercentage } from "../helpers/pixelRatios";
import { fontFamily,colors } from "../fonts";

const spaceBetween = 4;

const componentes = (props) => {
  return (
      <TouchableOpacity activeOpacity={0.8} onPress={props.onPress} style={[styles.card,props.styles]}>
      
      <View style={styles.containerCard}>
      {props.edit ? <View style={{alignItems:"flex-end"}}>
            <Feather color="#F2994A" size={26} name="edit-3" />
      </View> : null}
      <View style={[styles.containerCard,{alignItems:"center",justifyContent:"center"}]}>
        {props.icon ? props.icon : null}
            <Text style={[styles.title,props.titleStyle]}>{props.title}</Text>
            <Text style={styles.subTitle}>{props.subTitle}</Text>
        </View>
        </View>
      </TouchableOpacity>
  )
}

export default componentes;

const styles = StyleSheet.create({
    card : {
        flexDirection: "column",
        borderRadius: 8,
        padding: 10,
        backgroundColor: colors.secundary,
        width: widthPercentageToDP('50%'),
        minHeight: heightPercentageToDP('20%'),
        maxHeight: heightPercentageToDP('20%'),
        marginTop: spaceBetween,
        marginLeft: spaceBetween,
        marginRight: spaceBetween ,
        marginBottom : spaceBetween,
        flex:1,
        justifyContent:"center"

      },
      containerCard : {
            flex:1,
      },
      title : {
          fontSize : fontSizePercentage(18),
          alignSelf:"center",
          color:"white",
          fontFamily : fontFamily.fontFamilyMedium,
          flexWrap : "wrap"
      },
      subTitle : {
        fontSize : fontSizePercentage(15),
        alignSelf:"center",
        color:"white",
        flexWrap:"wrap",
        textAlign : "center",
        fontFamily : fontFamily.fontFamilyRegular

      }
})