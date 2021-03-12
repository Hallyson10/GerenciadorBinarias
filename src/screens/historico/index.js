import React,{ useEffect, } from 'react';
import { View,StyleSheet,Text,FlatList,Alert} from 'react-native';
import { fontSizePercentage } from "../../helpers/pixelRatios";
import { Header } from "../../componentes";
import { useHistorico, } from "../../context/historico";
import { useLucro } from "../../context/lucro";
import moment from "moment";
import Interstitial from "../admob/interstitial";
import { Fontisto,Ionicons,FontAwesome,AntDesign,MaterialIcons } from "@expo/vector-icons";
import Banner from "../admob/banner";
import { fontFamily,colors } from "../../fonts";
import { adUnitIDbannerHistorico,adUnitIDinterstitialHistorico } from "../admob/ids";
import { useSaldo } from "../../context/saldo";

const historico = () => {
  const { getHistorico,history } = useHistorico();
  const { lucroTotal,getLucroTotal,reiniciarLucros } = useLucro();
  const { saldo, setBanca,moeda,salvarMoeda,setSaldoEdit,saldoEdit } = useSaldo();

  useEffect(() => {
    getHistorico()
    getLucroTotal()
  },[])

  const limparLucro = () => {
      Alert.alert(
        "Limpar Lucro Total",
        "Você tem certeza que deseja reiniciar seus lucros totais?",[
          {
            text : "Cancelar",
            onPress:()=>{
              
            }
          },{
            text : "Confirmar",
            onPress:()=>{
              reiniciarLucros(0);
            }
          }
        ],{ cancelable : false}
      )
  }
  return (
      <View style={styles.container}>
        <Header
        backColor="#FFF"
        back
        title="Histórico"
         />
         <FlatList
           data={history}
           keyExtractor={(_,index) => JSON.stringify(index)}
           ListHeaderComponent={<View style={{height:150}}>
           <View style={{flex:1,backgroundColor: colors.secundary,alignItems:"center",justifyContent:"center"}}>
           <Banner id={adUnitIDbannerHistorico} style={{position:"relative"}} />
           </View>
           <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingRight:20}}>
           <Text style={[styles.title,{marginLeft : 26}]}>LUCRO TOTAL {moeda}{parseFloat(lucroTotal).toFixed(2)}</Text>
           <Text onPress={limparLucro} style={styles.title}>Limpar</Text>
           </View>
           </View>}
           renderItem={({item,index})=>(
            <View style={[styles.peopleContainer,{
                backgroundColor : colors.secundary
            }]}>
            <View>
            <Text style={styles.title} ><Fontisto color="white" size={14} name="date" />{`  `}Data : {`  `} {`${moment(item.data).format('DD/MM/YYYY')}`}</Text>
            <Text style={styles.title} ><MaterialIcons color="white" size={18} name="timer"/>{`  `}Hora :{`  `}{`${moment(item.data).format('LT')}`}</Text>
            <Text style={styles.title} >{item.status !== "lucro" ? <AntDesign size={15} color="#F2C94C" name="closecircleo" /> : <AntDesign size={14} color='rgba(111, 207, 151, 1)' name="checkcircleo" />}{`  `}Status :{`  `} {item.status}</Text>
            <Text style={[styles.title,{color : item.status !== "lucro" ?"#F2C94C" : 'rgba(111, 207, 151, 1)'}]} ><FontAwesome name="money" size={15}/>{`  `}Valor :{`  `} {parseFloat(item.valor).toFixed(2)}</Text>
              </View>
            </View>
           )}
         />
         <Interstitial id={adUnitIDinterstitialHistorico} />
      </View>
  )
}

export default historico;
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:colors.backgroundColor
    },
    peopleContainer : {
      paddingVertical:10,
      //backgroundColor:'rgba(52, 52, 52, 0.8)',
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
      fontFamily : fontFamily.fontFamilyMedium ,
      textAlign : "justify",
      marginBottom : 10,
      marginTop:10,
    },
    
})