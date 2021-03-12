import React,{ useState } from 'react';
import { View, FlatList,Alert } from 'react-native';
import { Header,CardOption,BotaoConfirmacao } from "../../componentes";
import { useNavigation } from '@react-navigation/native';
import Banner from "../admob/banner";
import { dataLivre } from "./informacoes";
import { adUnitIDbannerSelectGerenciamento } from "../admob/ids";
import { colors } from "../../fonts";

const gerenciamentos = () => {
  const [gerenciamentoSelecionado,setGerenciamentoSelecionado] = useState({id:"",title:""});
  const navigation = useNavigation();
  return (
    <View style={{flex:1,backgroundColor:colors.backgroundColor}}>
    <Header
        backColor="#fff"
        back
        title="Gerenciamentos"
         />
    <FlatList 
      data={dataLivre}
      keyExtractor={(item)=>item.id}
      renderItem={({item,index})=>(
        <CardOption
          key={item.id}
          title={item.title}
          description={item.description}
          id={item.id}
          itemSelect={gerenciamentoSelecionado.id === item.id ? gerenciamentoSelecionado.title : false}
          selectItem={(props)=>setGerenciamentoSelecionado(item)}
        />

      )}
    />
    <Banner
           style={{position:"relative",alignSelf:"center",margin:10}}
           type="banner"
           id={adUnitIDbannerSelectGerenciamento}
         />
    <View style={{marginBottom:20,marginTop:10}}>
      <BotaoConfirmacao 
        title="Confirmar"
        atived={gerenciamentoSelecionado.id === ""? true:false}
        onPress={()=>{
          if(gerenciamentoSelecionado.id === ""){
            Alert.alert("Ops!","Por favor selecione um gerenciamento!")
          }else{
            navigation.navigate("informacoesGerenciamento",{gerenciamentoSelecionado})
          }
        }}
      />
    </View>
    </View>
  )
}

export default gerenciamentos;

