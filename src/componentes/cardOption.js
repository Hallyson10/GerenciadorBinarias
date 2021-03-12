import React,{useState} from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import { List } from 'react-native-paper';
import { heightPercentageToDP,fontSizePercentage } from "../helpers/pixelRatios";
import { fontFamily,colors,fontSize } from "../fonts";

const componentes = (props) => {
  
  return (
    <List.Accordion
          title={props.title}
          theme={{colors : {primary : "#fff"}}}
          titleStyle={{color:"#f2f2f2",fontFamily:fontFamily.fontFamilyMedium}}
          style={{backgroundColor: colors.secundary,
          height:heightPercentageToDP("8%"),
          borderTopWidth:0.5,
          borderBottomWidth :0.5,
          borderColor:"#4F4F4F"
          }}
        >
          <View style={{minHeight:167,backgroundColor:"#f2f2f2",padding:18}}>
            {props.description.map((item,index)=>(
              <View key={index}>
              <Text style={styles.title}>{item.topico}</Text>
              <Text style={styles.description} >{item.description}
              </Text>
              </View>
            ))}
            <Text style={[styles.title,{marginBottom:0,marginTop:20}]}>
            Se identificou com esse perfil de investidor? Selecione este gerenciamento e vamos lucrar!</Text>
            <TouchableOpacity 
            onPress={()=>props.selectItem(props.id)}
            style={[styles.checkBoxContainer,{marginTop:10,alignSelf:"center"}]}>
              {props.itemSelect ? <View style={styles.checkBoxRound}>
              </View> : <View style={[styles.checkBoxRound,{backgroundColor:"white"}]}>
              </View>}
            </TouchableOpacity>
            <Text style={{alignSelf:"center",fontSize:fontSizePercentage(19)}}>Selecionar</Text>
          </View>

        </List.Accordion>
  )
}

export default componentes;

const styles = StyleSheet.create({
  title : {
    fontSize : fontSize.medium,
    color : "black",
    fontWeight : "600",
    textAlign : "justify",
    marginBottom : 10,
    marginTop:10,
    fontFamily : fontFamily.fontFamilyBold
  },
  description : {
    fontSize : fontSize.medium,
    color : "black",
    fontWeight : "500",
    textAlign : "justify",
    fontFamily : fontFamily.fontFamilyRegular

  },
  checkBoxContainer : {
    borderColor:'rgba(52, 52, 52, 0.8)',
    backgroundColor:"white",
    borderWidth : 2,
    height : 38,
    width : 38,
    borderRadius : 360,
    alignItems: "center",
    justifyContent:"center",
  },
  checkBoxRound:{
    backgroundColor:"#4F4F4F",
    height : 30,
    width : 30,
    borderRadius : 360,
    borderColor:'rgba(52, 52, 52, 0.8)',
    borderWidth : 1,
  },
  viewHorizontal : {
    flexDirection : "row",
    alignItems:"center",
    alignSelf:"center",
  }
})