import React,{ useEffect,useCallback } from 'react';
import { View, StyleSheet,FlatList,Text, Alert } from 'react-native';
import { Header,CardButton } from "../../componentes";
import { AntDesign,FontAwesome,Ionicons,SimpleLineIcons,Entypo } from "@expo/vector-icons";
import { useNavigation,CommonActions } from '@react-navigation/native';
import { useLogin } from "../../context/usuario";
import { useSaldo } from "../../context/saldo";
import { useGerenciamento } from "../../context/gerenciamento";
import { useLucro } from "../../context/lucro";
import { usePlay } from "../../context/play";
import { fontSizePercentage } from "../../helpers/pixelRatios";
import { fontFamily,colors } from "../../fonts";

const paddingBottom = 16;
const paddingHorizontal = 16;

const screens = () => {
  const navigation = useNavigation();
  const { user,SignOut,setPrimeiroAcesso,primeiroAcesso } = useLogin();
  const { saldo,findSaldo,moeda,buscarMoeda } = useSaldo();
  const { gerenciamento, getGerenciamento,getPayout } = useGerenciamento();
  const { stopWin,stopLoss} = usePlay();
  const { lucroTotal,getLucroTotal } = useLucro();
  const buttonOptions = [
    { title : "Iniciar",onPress:()=>{
      if(stopWin){
        Alert.alert("Ei lucrito!","Ouça uma boa música e volte outra hora, hoje foi nosso STOP WIN, parabéns!")
      }else if(stopLoss){
        Alert.alert("Ei lucrito!","Ouça uma boa música e volte outra hora, hoje já foi o STOP!")
      }else if(saldo === "0"){
        Alert.alert("Ei lucrito!","Antes de iniciarmos precisamos que você informe o saldo atual da sua banca!")
      }else if(gerenciamento.id === ""){
        Alert.alert("Ops!","Selecione um gerenciamento para iniciarmos!");
      }else if(parseFloat(saldo) > 0){
        navigation.navigate("Play")
      }else{
        Alert.alert("Ops!",saldo);
      }
    },styles:{backgroundColor:colors.verde},titleStyle:{marginTop:5,color:colors.secundary},icon:<SimpleLineIcons color={colors.secundary} size={22} name="control-play" /> },
    { title : "",styles:{position:"absolute",width:0,height:0,backgroundColor:'transparent',flexWrap:"wrap"},titleStyle:{marginTop:5,flexWrap:"wrap"},icon:<SimpleLineIcons color="#F2C94C" size={22} name="control-play" /> },
    { title : "Banca Atual",onPress:()=>navigation.navigate("EditarSaldo") ,subTitle : `${moeda} ${saldo}`, edit:true,icon:<AntDesign color="#F2C94C" size={28} name="creditcard" />},
    { title : "Gerenciamento",onPress:()=>navigation.navigate("SelectPerfil") ,subTitle : gerenciamento ? gerenciamento.title : "", edit:true, icon:<SimpleLineIcons color="#F2C94C" size={30} name="game-controller" />},
    //{ title : "Curso Lucrito",onPress:()=>navigation.navigate("SelecionarNivel") , icon:<AntDesign color="#F2C94C" size={28} name="videocamera" />},
    { title : "Histórico",onPress:()=>navigation.navigate("Historico"), icon:<AntDesign color="#F2C94C" size={28} name="linechart" />},
    { title : "Ranking", onPress:()=>navigation.navigate("Ranking"),icon:<AntDesign color="#F2C94C" size={28} name="Trophy" /> },
  ]
  const find = useCallback(()=>{
    findSaldo()
    getGerenciamento({ userId : user.uid})
    getPayout()
    buscarMoeda()
  },[])

  useEffect(()=>{
      find()
      getLucroTotal()
  },[])
  useEffect(()=>{
      if(primeiroAcesso){
        navigation.navigate("SaldoBoasVindas")
        setPrimeiroAcesso(false)
      }
  },[primeiroAcesso])

  return (
    <View style={styles.container}>
     <Header
       title={`Bem-vindo(a), trader!`}
       title1={`${user ? user.displayName : ""}`}
       subTitle="Vamos lucrar hoje?"
       //backColor={colors.amarelo}
       //title1Style={colors.amarelo}
       icon
       tintColorIcon={parseFloat(lucroTotal) >= 500 ? "#F2C94C" : false}
       styles={{backgroundColor:colors.backgroundColor}}
     />
     
     <FlatList 
       numColumns={2}
       keyExtractor={(_,index) => JSON.stringify(index)}
       data={buttonOptions}
       contentContainerStyle={{
         marginTop:20,
        flexGrow : 1,
        paddingBottom: paddingBottom,
        paddingHorizontal: paddingHorizontal,
      }}
      ListFooterComponent={
        <View style={{flex:1,alignItems:"center",justifyContent:"center",margin:40,marginTop:20}}>
                    <Text style={{fontFamily : fontFamily.fontFamilyBold,color:"white",fontSize:fontSizePercentage(18)}}>Segue nós</Text>
            <Text style={{fontFamily : fontFamily.fontFamilyMedium,color:"white",fontSize:fontSizePercentage(18)}}>Insta : @lucritoapp</Text>
            <Text onPress={()=>navigation.navigate("Configuracoes")} style={{fontFamily : fontFamily.fontFamilyRegular,color:"white",marginTop:10,fontSize:fontSizePercentage(18)}}>Configurações</Text>

        </View>
      }
       renderItem={({item,index})=>(
         <CardButton
           key={index}
           title={item.title}
           subTitle={item.subTitle}
           icon={item.icon}
           edit={item.edit}
           styles={item.styles}
           titleStyle={item.titleStyle}
           onPress={item.onPress}
         />
       )
       }
     />
    </View>
  )
}

export default screens;

const styles = StyleSheet.create({
    container : {
      backgroundColor:colors.backgroundColor,
      flex:1,
      paddingTop:20,
      flexWrap:"wrap"
    },
   
})