import React,{ useState,useEffect } from 'react';
import { View,StyleSheet,Text,TextInput, Alert, Image,KeyboardAvoidingView,Platform,ScrollView } from 'react-native';
import { Header,BotaoConfirmacao } from "../../componentes";
import { heightPercentageToDP,fontSizePercentage,widthPercentageToDP } from "../../helpers/pixelRatios";
import { useNavigation } from '@react-navigation/native';
import { useSaldo } from "../../context/saldo";
import { fontFamily,colors } from "../../fonts";
import Input from "../editarSaldo/inputs";

const editarSaldo = () => {
    const { setBanca,saldoEdit,salvarMoeda,moeda } = useSaldo();
    const navigation = useNavigation();

  return (
      <View style={styles.container}>
        <Header
        backColor="#FFF"
        title="Saldo da banca"
        back
         />
         <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "height" : "height"}
            style={{backgroundColor: "white",paddingTop:10}}
            >
               <ScrollView>
               <Text style={[styles.text,{marginBottom:10}]}>Seja bem-vindo(a)!</Text>
                <View style={styles.view}>
               <View style={{position:"absolute",maxHeight:heightPercentageToDP(30),minHeight:heightPercentageToDP(30),alignItems:"center"}}>
                <Image 
                    source={require("../../../assets/imagewelcome.png")}
                    style={{flex:1,width:widthPercentageToDP(90)}}
                    resizeMode="cover"
                />
                </View>
        <Input
            style={{marginBottom:20,marginTop:155}}
        />
        <BotaoConfirmacao 
            title="Salvar" 
            styles={{backgroundColor:colors.backgroundColor}}
            titleStyle={{color : "#fff"}}
            onPress={()=>{
                if(parseFloat(saldoEdit) < 200 && moeda === "R$"){
                    Alert.alert("Valor de banca mínimo R$200","Operar com valor de banca menor que R$200 reais além de dificultar o seu gerenciamento, na maioria das vezes não rende resultados satisfatórios!")
                }else if(parseFloat(saldoEdit) < 100 && moeda === "$"){
                    Alert.alert("Valor de banca mínimo $100","Operar com valor de banca menor que $100 dólares além de dificultar o seu gerenciamento, na maioria das vezes não rende resultados satisfatórios!")
                }else{
                    setBanca({valor : saldoEdit})
                    salvarMoeda(moeda)
                navigation.navigate("SelectPerfil")
                }
               
            }}
        />
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
      </View>
  )
}

export default editarSaldo;

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:"white"
    },
    text : {
        fontSize : fontSizePercentage(20),
        color : "#000",
        fontFamily : fontFamily.fontFamilyBold,
        alignSelf:"center",
        maxWidth:250,
        textAlign:"center"
    },
    view : {
        alignItems : "center",
    },
    viewCentral : {
    }
})