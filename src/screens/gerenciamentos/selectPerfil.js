import React from 'react';
import { View, StyleSheet,FlatList,Text,TouchableOpacity,Alert } from 'react-native';
import { heightPercentageToDP,fontSizePercentage } from "../../helpers/pixelRatios";
import { Header } from "../../componentes";
import { useNavigation } from '@react-navigation/native';
import { Entypo,MaterialCommunityIcons } from "@expo/vector-icons";
import AdMob from "../admob/banner";
import { fontFamily,colors } from "../../fonts";
import { adUnitIDbannerSelectPerfilGerenciamento } from "../admob/ids";

const gerenciamentos = () => {
    const navigation = useNavigation();

    const options = [
        {iconName :"medal" , colorIcon : "#c0c0c0", title : 'Nível Aprendiz',onPress:()=>navigation.navigate("GerenciamentoScreen")},
        {iconName :"medal" ,colorIcon : "#F2C94C", title : 'Nivel Avançado',onPress:()=>navigation.navigate("GerenciamentoPago")},
    ]
  return (
      <View style={styles.container}>
      <Header
        backColor="#FFF"
        back
        title="Níveis de Conhecimento"
         />
        <FlatList 
            data={options}
            keyExtractor={(_,index)=>JSON.stringify(index)}
            renderItem={({item,index})=>(
                    <TouchableOpacity onPress={item.onPress} key={index} style={styles.containerButton}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Entypo style={{marginRight:10}} color={item.colorIcon} size={26} name={item.iconName}/>
                    <Text style={styles.title}>{item.title}</Text>
                    </View>
                        <Entypo name="chevron-right" size={20} color="white" />
                    </TouchableOpacity>
            )}
        />
        <AdMob id={adUnitIDbannerSelectPerfilGerenciamento}/>
      </View>
  )
}

export default gerenciamentos;

const styles = StyleSheet.create({
    container : {
        flex:1,backgroundColor : colors.backgroundColor
    },
    containerButton : {
        height : heightPercentageToDP("8%"),
        backgroundColor:colors.secundary,
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