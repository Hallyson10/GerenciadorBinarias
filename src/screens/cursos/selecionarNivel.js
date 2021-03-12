import React from 'react';
import { View, StyleSheet,FlatList,Text,TouchableOpacity,Alert } from 'react-native';
import { heightPercentageToDP,fontSizePercentage } from "../../helpers/pixelRatios";
import { Header } from "../../componentes";
import { useNavigation } from '@react-navigation/native';
import { Entypo } from "@expo/vector-icons";
import AdMob from "../admob/banner";

const cursos = () => {
    const navigation = useNavigation();

    const options = [
        {title : 'Nível Aprendiz',onPress:()=>navigation.navigate("Cursos")},
        {title : 'Nivel Mediano',onPress:()=>Alert.alert("Estamos preparando a melhor aula de todas. Aguarde!")},
        {title : 'Nivel Avançado',onPress:()=>Alert.alert("Estamos preparando a melhor aula de todas. Aguarde!")},
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
                        <Text style={styles.title}>{item.title}</Text>
                        <Entypo name="chevron-right" size={20} color="black" />
                    </TouchableOpacity>
            )}
        />
        <AdMob/>
      </View>
  )
}

export default cursos;

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
        fontWeight : "700",
        textAlign : "justify",
        marginBottom : 10,
        marginTop:10,
      },
})