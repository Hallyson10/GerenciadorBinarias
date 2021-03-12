import React,{ useState, useEffect } from 'react';
import { View,Modal ,Text, TouchableOpacity,TextInput} from 'react-native';
import { useGerenciamento } from "../../context/gerenciamento"
import { BotaoConfirmacao,ButtonOp } from "../../componentes";
import { colors,fontFamily,fontSize } from "../../fonts";


const play = (props) => {
  const { payout,setPayout } = useGerenciamento();

   
    return (
      <Modal
      visible={props.isVisible}
      animationType="slide"
      >
      <View style={{flex:1,backgroundColor:colors.backgroundColor}}>
      <TouchableOpacity style={{alignSelf:"flex-end",margin:40}} onPress={props.close}>
            <Text style={{fontSize:fontSize.medium,color:"white",fontFamily : fontFamily.fontFamilyMedium}}>Fechar{" "}X</Text>
        </TouchableOpacity>
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <View style={{ 
          marginBottom:40,
          padding:12,
        minWidth : "82%",
        backgroundColor : colors.secundary,
        borderWidth : 2,
        borderColor : "rgba(28, 28, 28, 0.8)",
        borderRadius : 12}}>
        <Text style={{color:"white",fontSize:fontSize.small,fontFamily:fontFamily.fontFamilyMedium}}>Payout Atual %</Text>
        <TextInput
        placeholder="%"
        placeholderTextColor="#ccc"
        keyboardType="number-pad"
        returnKeyType="done"
        value={payout.toString()}
        onChangeText={(text)=>setPayout(text)}
        maxLength={3}
        style={{fontFamily:fontFamily.fontFamilyRegular,marginTop:20,marginBottom:40,borderRadius:12,textAlign:"center",color : "white",alignSelf:"center",height:50,backgroundColor:colors.secundary,minWidth:200,maxWidth:200}}
        />
        </View>
        <BotaoConfirmacao
          title="Salvar"
          onPress={()=>props.close()}
        />
        </View>
      </View>
       
      </Modal>
  )
}

export default play;