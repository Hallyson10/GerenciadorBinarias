import React,{ useState } from 'react';
import { View, FlatList,Alert,TouchableOpacity,StyleSheet,Text,Linking } from 'react-native';
import { Header,CardOption,BotaoConfirmacao } from "../../componentes";
import { useNavigation } from '@react-navigation/native';
import Banner from "../admob/banner";
import { dataPago } from "./informacoes";
import { adUnitIDbannerSelectGerenciamento } from "../admob/ids";
import { MaterialCommunityIcons,Entypo } from '@expo/vector-icons';
import { heightPercentageToDP,fontSizePercentage } from "../../helpers/pixelRatios";
import { fontFamily,colors } from "../../fonts";
import { useLogin } from "../../context/usuario";

const gerenciamentos = () => {
  const navigation = useNavigation();
  const { nome } = useLogin();
  const redirectWhatsapp = () =>{
    const text = `Hey lucrito,sou o ${nome} gostaria de solicitar minha liberação para lucrar mais ainda com os gerenciamentos avançados!`
    Linking.openURL(`http://api.whatsapp.com/send?text=${text}&phone=+5588992046291`)
  }
  return (
    <View style={{flex:1,backgroundColor:colors.backgroundColor}}>
    <Header
        backColor="#fff"
        back
        title="Gerenciamentos"
         />
         {/* <TouchableOpacity onPress={redirectWhatsapp} style={[styles.containerButton,{backgroundColor:colors.verde}]}>
         <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",flex:1}}>
         <Text style={styles.title}>Solicitar Liberação</Text>
         <MaterialCommunityIcons color={"#FFF"} size={26} name={"whatsapp"}/>
         </View>
         </TouchableOpacity> */}
    <FlatList 
      data={dataPago}
      keyExtractor={(item)=>item.id}
      renderItem={({item,index})=>(
        <TouchableOpacity onPress={item.onPress} key={index} style={styles.containerButton}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
        <Entypo style={{marginRight:10}} color={"#F2C94C"} size={26} name={"medal"}/>
        <Text style={styles.title}>{item.title}</Text>
        </View>
        <MaterialCommunityIcons name="lock-clock" size={20} color="#fff" />
        </TouchableOpacity>

      )}
    />
    <Banner
           style={{position:"relative",alignSelf:"center",margin:10}}
           type="banner"
           id={adUnitIDbannerSelectGerenciamento}
         />
    <View style={{marginBottom:20,marginTop:10}}>
      
    </View>
    </View>
  )
}

export default gerenciamentos;

const styles = StyleSheet.create({
  container : {
      flex:1,backgroundColor : "black"
  },
  containerButton : {
      height : heightPercentageToDP("8%"),
      backgroundColor:'rgba(52, 52, 52, 0.8)',
      borderTopWidth:0.5,
      borderBottomWidth :0.5,
      borderColor:"#4F4F4F",
      flexDirection : "row",
      alignItems:"center",
      paddingHorizontal:20,
      justifyContent:"space-between"
  },
  title : {
      fontSize : fontSizePercentage(18),
      color : "white",
      fontFamily : fontFamily.fontFamilyMedium,
      textAlign : "justify",
      marginBottom : 10,
      marginTop:10,
    },
})