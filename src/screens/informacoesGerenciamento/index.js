import React,{ useState,useEffect } from 'react';
import { View,StyleSheet,TextInput,Text,ScrollView,Alert } from 'react-native';
import { Header,BotaoConfirmacao  } from "../../componentes";
import { fontSizePercentage } from "../../helpers/pixelRatios";
import { useGerenciamento } from "../../context/gerenciamento";
import { CommonActions,useNavigation } from "@react-navigation/native";
import { fontFamily,colors } from "../../fonts";

const informacoesGerenciamento = (props) => {
    const { 
        salvarGerenciamento,
        sucessGerenciamentoSalvo,
        payout,
        setPayout, 
        savePayout
    } = useGerenciamento();
    
    const [gerenciamentoSelecionado,setGerenciamentoSelecionado] = useState({id:"",title:""});
    const navigation = useNavigation();


    useEffect(()=>{
        if(sucessGerenciamentoSalvo){
            navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [
                    {name:"Home"},
                  ]
                })
              )
        }
    },[sucessGerenciamentoSalvo])
    useEffect(()=>{
        try {
            const x = props.route.params;
            setGerenciamentoSelecionado(x.gerenciamentoSelecionado)
             
        } catch (error) {
            Alert.alert("Ops!","Ocorreu um erro inesperado!")
        }
           
    },[])
  return (
      <View
      style={styles.container}
      >
      <Header
        backColor="#fff"
        back
        title="Configurações"
         />
         <View style={{flex:1}}>
         <ScrollView>
        <Text style={{color:"#fff",alignSelf:"center",fontFamily : fontFamily.fontFamilyBold,fontSize : fontSizePercentage(20)}}>Gerenciamento Selecionado</Text>
        <View style={styles.gere}>
        <Text style={{textAlign:"center",color:"black",fontFamily : fontFamily.fontFamilyMedium,fontSize : fontSizePercentage(18)}}>{gerenciamentoSelecionado.title}</Text>
        </View>
        <View style={styles.viewCentral}>
        <Text style={styles.title}>Stop Loss</Text>
        <Text style={styles.textValue}>{gerenciamentoSelecionado.stopLoss}</Text>
        <Text style={styles.title}>Stop Gain</Text>
        <Text style={styles.textValue}>{gerenciamentoSelecionado.stopGain}</Text>
        <Text style={styles.title}>Min. Payout %</Text>
        <View style={{alignItems:"center",flexDirection:"row",alignSelf:"center"}}>
        <TextInput
            value={payout.toString()}
            onChangeText={(text)=>{
                setPayout(text)
            }}
            style={styles.textValue}
            placeholder={`${87}`}
            returnKeyType="go"
            keyboardType="number-pad"
            maxLength={3}
        />
        <Text style={[styles.textValue,{marginLeft:10}]}>%</Text>
        </View>
        </View>
        <BotaoConfirmacao
            title="Confirmar"
            styles={{backgroundColor : "white",marginTop:40}}
            titleStyle={{color:"black"}}
            onPress={()=>{
                if(payout.toString().length > 0 && payout.toString().length <= 2 && parseFloat(payout) >= 60){
                    savePayout(parseInt(payout))
                    salvarGerenciamento({
                    optionGerencimento :gerenciamentoSelecionado
                    })

                }else{
                    Alert.alert("Ops!","Por favor selecione um payout mínimo permitido (min.payout 60).")
                }
            }}
        />
                </ScrollView>
                
            </View>
           
      </View>

  )
}

export default informacoesGerenciamento;

const styles = StyleSheet.create({
    container : {
      backgroundColor:colors.backgroundColor,
      flex:1,
    },
    viewCentral : {
        marginHorizontal : 40,
        backgroundColor:'rgba(52, 52, 52, 0.8)',
        borderRadius : 14,
        paddingBottom : 20
    },
    textValue : {
        textAlign : "center",
        fontFamily :fontFamily.fontFamilyMedium,
        fontSize : fontSizePercentage(20),
        color : "#ccc"
    },
    title : {
        fontFamily :fontFamily.fontFamilyMedium,
        fontSize : fontSizePercentage(20),
        margin:14,
        color : "#fff"
    },
    gere : {
        alignSelf:"center",
        height : 60,
        width : 140,
        backgroundColor:"#6FCF97",
        alignItems:"center",
        justifyContent:"center",
        margin:20,
        borderRadius : 12
    }
})