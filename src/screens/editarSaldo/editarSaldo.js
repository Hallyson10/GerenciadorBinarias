import React,{ useState,useEffect } from 'react';
import { View,StyleSheet,Text,TextInput, Alert, } from 'react-native';
import { Header,BotaoConfirmacao } from "../../componentes";
import { heightPercentageToDP,fontSizePercentage } from "../../helpers/pixelRatios";
import { useNavigation } from '@react-navigation/native';
import { useSaldo } from "../../context/saldo";
import { fontFamily,colors,fontSize } from "../../fonts";
import Input from "./inputs";

const editarSaldo = () => {
    const { saldo, setBanca,moeda,salvarMoeda,setSaldoEdit,saldoEdit } = useSaldo();
    const navigation = useNavigation();

    
  return (
      <View style={styles.container}>
        <Header
        backColor="#fff"
        back
        title="Saldo da banca"
         />
         <View style={styles.view}>
         <Input/>
        <BotaoConfirmacao 
            title="Salvar"
            styles={{backgroundColor:"#fff",marginTop:40}}
            titleStyle={{color : "#000"}}
            onPress={()=>{
                if((parseFloat(saldoEdit) < parseFloat(10)) && moeda === "R$"){
                    Alert.alert("Ops!","Valor de banca mínimo R$100")
                }else if((parseFloat(saldoEdit) < parseFloat(100)) && moeda === "$"){
                    Alert.alert("Ops!","Valor de banca mínimo $100")
                }else{
                    setBanca({valor : saldoEdit})
                    salvarMoeda(moeda);
                    navigation.goBack()
                }
            }}
        />
        </View>
      </View>
  )
}

export default editarSaldo;

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:colors.backgroundColor
    },
    text : {
        fontSize : fontSize.medium,
        color : "#fff",
        fontFamily : fontFamily.fontFamilyBold,
        alignSelf:"center",
        maxWidth:250,
        textAlign:"center"
    },
    view : {
        flex:1,
        alignItems : "center",
        marginTop:40
    },
    viewCentral : {
        height : heightPercentageToDP(50),
        justifyContent:"space-evenly"
    },
    retangulo : {
        padding:12,
        minWidth : "82%",
        backgroundColor : colors.secundary,
        borderWidth : 2,
        borderColor : "rgba(28, 28, 28, 0.8)",
        borderRadius : 12,
        
    },
    botao : {
        minHeight : 40,
        maxHeight : 40,
        flex:1,
        backgroundColor:"black",
        marginTop:10,
        borderRadius : 12,
        alignItems : "center",
        justifyContent : "center"
    },
    titleOption : {
        fontSize:fontSize.small,
        color:"white",
        fontFamily:fontFamily.fontFamilyMedium,
        marginTop:6,
        marginBottom:10
    }
})