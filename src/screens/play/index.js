import React,{ useEffect,useCallback,useState } from 'react';
import { StyleSheet,Text,View,ImageBackground,Alert } from 'react-native';
import { Header,Bloco,BotaoConfirmacao,ButtonOp } from "../../componentes";
import gerenciamento from "../../gerenciamentos";
import { fontSizePercentage ,heightPercentageToDP} from "../../helpers/pixelRatios";
import { useSaldo } from "../../context/saldo";
import { usePlay } from "../../context/play";
import { useRanking } from "../../context/ranking";
import { useHistorico } from "../../context/historico";
import { useLucro } from "../../context/lucro";
import { useGerenciamento } from "../../context/gerenciamento"
import { CommonActions, useNavigation} from "@react-navigation/native";
import { colors,fontFamily,fontSize } from "../../fonts";
import Modal from "./modalPayout";

const Play = () => {
  const { gerenciamento : gerenciamentoAtual,payout } = useGerenciamento();
  const [isVisible,setIsVisible] = useState(false);

  const navigation = useNavigation();
  
  const { 
    Win,
   Loss,
   valorEntrada,
   setSaldoAtual,
   stopLoss,
   stopWin,
   setPayout,
   lucro,
   valorStopLoss,
   valorStopGain,
   qtdEntrada,
   banca
   } = gerenciamento(gerenciamentoAtual ? gerenciamentoAtual.id : "");
   const { saldo,setBanca,moeda } = useSaldo();
   const { setRanking } = useRanking();
   const { setStopWin,setStopLoss,paused,setPaused } = usePlay();
   const { saveHistorico } = useHistorico();
   const { saveLucroTotal } = useLucro();

   useEffect(() => {
    setPayout(payout);
   },[payout])

   useEffect(()=>{
    setSaldoAtual(parseFloat(saldo));
  },[])

  const save = useCallback(()=>{
    setBanca({valor:parseFloat(banca).toFixed(2)});
    setRanking({valor : lucro});
    saveHistorico(lucro);
    saveLucroTotal(lucro);
    if(stopWin){
      setStopWin(true)
    }else if(stopLoss){
      setStopLoss(true)
    }
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {name:"Home"},
        ]
      })
    )
  },[stopWin,stopLoss])

  useEffect(()=>{
    if(stopWin || stopLoss){
      save()
    }
  },[stopWin,stopLoss])

  const stop = ()=>{
      setPaused(!paused)
      if(paused === false){
        setBanca({valor:parseFloat(banca).toFixed(2)});
      }
  }
  return (
      <View style={styles.container}>
     
      <ImageBackground
      style={{flex:1}}
      imageStyle={{flex:1}}
      source={require("../../../assets/image.png")}
      >
      
      <View style={[styles.viewSeparacao,{flex:1}]}>
      
      <Header
          back
          title="Vamos lucraaar agora!"
          subTitle={`Saldo ${moeda}${parseFloat(banca).toFixed(2)}`}
      />
     
      <View style={[styles.viewHorizontal,{marginHorizontal:8}]}>
      <Bloco 
          title="Lucros"
          subTitle={`${moeda} ${lucro >= 0 ? parseFloat(lucro).toFixed(2) : parseFloat(0).toFixed(2)}`}
          styles={{minHeight:62,maxHeight:62}}
      />
      <Bloco 
         title="Percas"
          subTitle={`${moeda} ${lucro < 0 ? parseFloat(lucro).toFixed(2) : parseFloat(0).toFixed(2)}`}
          styles={{minHeight:62,maxHeight:62}}
      />
      <Bloco
      onPress={()=>setIsVisible(!isVisible)}
        title="Payout %"
        subTitle={payout}
        styles={{minHeight:62,maxHeight:62}}
      />
      </View>
      </View>
      <View style={[styles.viewSeparacao,{justifyContent:"space-between"}]}>
      <View style={{flex:1,alignItems:"center"}}>
            <Text style={styles.title}>{qtdEntrada}º ENTRADA</Text>
            <Text style={styles.title}>{moeda}{stopWin || stopLoss ? "0.00" : parseFloat(valorEntrada).toFixed(2)}</Text>
      </View>
        <BotaoConfirmacao
          onPress={stop}
          title={paused ? "CONTINUAR": "PARAR"}
        />
      </View>
      <View style={styles.viewHorizontal}>
      <View style={{alignItems:"center",flex:1}}>
      <Text style={{color:"#F2C94C",fontSize:14}}>Stop Loss</Text>
      <Text style={{color:"#F2C94C",fontSize:14}}>{gerenciamentoAtual.stopLoss}</Text>
     
      </View>
      <View style={{alignItems:"center",flex:1}}>
      <Text style={{color:"#6FCF97",fontSize:14}}>Stop Gain</Text>
      <Text style={{color:"#6FCF97",fontSize:14}}>{gerenciamentoAtual.stopGain}</Text>
      </View>
      
      </View>
      <View style={[[styles.viewSeparacao,{justifyContent:"flex-end",flex:0,marginTop:10}]]}>
      <View style={[styles.viewHorizontal,{paddingHorizontal:10}]}>
        <ButtonOp onPress={()=>{
          if(payout === 0 || !payout){
            Alert.alert("Ops!","Insira o payout!")
          }else if(paused){
            Alert.alert("Ops!","Gerenciamento pausado!")
          }else{
            Loss()
          }
        }} title="LOSS" color="#F2C94C"/>
        <ButtonOp onPress={()=>{
          if(payout === 0 || !payout){
            Alert.alert("Ops!","Insira o payout!")
          }else if(paused){
            Alert.alert("Ops!","Gerenciamento pausado!")
          }else{
            Win()
          }
        }} titleStyle={{fontSize:22}} title="GAIN" color="#6FCF97"/>
      </View>
      
      </View>
      </ImageBackground>
      <Modal
        isVisible={isVisible}
        open={()=>setIsVisible(!isVisible)}
        close={()=>setIsVisible(!isVisible)}
      />
      </View>
  )
}

export default Play;

const styles = StyleSheet.create({
  container : {
    flex : 1,backgroundColor : colors.backgroundColor,
  },
  viewHorizontal : {
    flexDirection : "row",
    alignItems: "center",justifyContent:"center"
  },
  viewSeparacao : {
    flex:1,
  },
  title : {
    fontSize : fontSize.large,
    color : "white",
    alignSelf:"center",
    fontFamily : fontFamily.fontFamilyMedium
  },
  containerBloco : {
    borderRadius : 12,
    backgroundColor : colors.backgroundColor,flex:1,
    margin:5,
    alignItems: "center",
    justifyContent:"center",
    maxHeight : 60,
    minHeight : 60
},
titleButton : {
  fontSize : fontSize.semi_small,
  fontFamily : fontFamily.fontFamilyBold,
  color : "white"
},
subTitleButton : {
  fontSize :fontSize.small,
  fontFamily : fontFamily.fontFamilyRegular,
  color : "white"

}
})