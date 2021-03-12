import React from 'react';
import { View, StyleSheet,Text,TouchableOpacity } from 'react-native';
import { AntDesign,MaterialCommunityIcons,Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { fontFamily, fontSize,colors } from "../fonts";

import { heightPercentageToDP,fontSizePercentage } from "../helpers/pixelRatios";

const componentes = (props) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.header,props.styles]}>
      <View style={[styles.bloco,{flex:4,flexDirection:"row",alignItems:"center"}]}>
      {props.back ? <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.iconBack}>
      <AntDesign name="left" size={32} color={props.backColor ? props.backColor :"#fff"} /> 
      </TouchableOpacity> : null}
        <View style={[styles.bloco,{justifyContent:"center"}]}>
            <Text style={[styles.title,{color : props.backColor ? props.backColor : "#fff"}]}>{props.title}</Text>
            {props.title1 ? <Text style={[styles.title1,{color:props.title1Style ? props.title1Style : "#fff"}]}>{props.title1}</Text> : null}
           { props.subTitle ? <Text style={[styles.subTitle,{color : props.subTitleColor ? props.subTitleColor : "#fff"}]}>{props.subTitle}</Text> : null}
        </View>
      </View>
      {props.icon ? <View style={[styles.bloco,{justifyContent:"center",alignItems:"flex-end",marginRight:10}]}>
        <Entypo  color={props.tintColorIcon ? props.tintColorIcon : "#c0c0c0" } size={26} name="medal"/>
      </View> : null}
    </View>
  )
}

export default componentes;

const styles = StyleSheet.create({
    header : {
      minHeight : heightPercentageToDP("10%"),
      maxHeight : heightPercentageToDP("10%"),
      flexDirection : "row",
      paddingHorizontal:10,
      marginTop:20,
      paddingLeft : 20,
      backgroundColor : colors.secundary,
    },
    bloco : {
      flex:1,
    },
    title : {
      fontSize : fontSize.medium,
      color : "white",
      fontFamily : fontFamily.fontFamilyBold
    },
    title1 : {
      fontSize : fontSizePercentage(18),
      color : "white",
      fontFamily : fontFamily.fontFamilyMedium
    },
    subTitle : {
      fontSize : fontSizePercentage(16),
      color : "white",
      fontWeight : "500",
      fontFamily : fontFamily.fontFamilyRegular

    },
    iconBack : {
      height:50,
      width : 50,
      marginRight : 10,
      justifyContent : "center"
    }
  })