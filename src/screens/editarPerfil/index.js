import React,{ useEffect } from 'react';
import { View,Text,TextInput ,StyleSheet,ScrollView,Alert} from 'react-native';
import { usePerfil } from "../../context/perfilUsuario";
import { useLogin } from "../../context/usuario";
import { Header,BotaoConfirmacao } from "../../componentes";
import { fontFamily,colors,fontSize } from "../../fonts";
import { heightPercentageToDP,fontSizePercentage,widthPercentageToDP } from "../../helpers/pixelRatios";

const editarPerfil = () => {
    const { nome,setNome, alteraNome,nomeUpdateSucess,setSucessName } = usePerfil();
    const { user,SignOut,setUser } = useLogin();

    useEffect(()=>{
        setNome(user.displayName)
        setSucessName(false)
    },[])

    
  return (
      <View style={{flex:1,backgroundColor:colors.backgroundColor}}>
      <Header
        backColor="#fff"
        back
        title="Configurações"
         />
         <View style={{flex:1}}>
         <ScrollView>
         <TextInput
        style={[styles.textInput]}
        placeholder="Nome"
        autoCapitalize="words"
        placeholderTextColor='rgba(242, 242, 242, 0.4)'
        value={nome}
        onChangeText={(text)=>{
          if(nomeUpdateSucess){
              
          }else{
          setNome(text)
          setUser({...user,displayName : text})
          }
         
        }}
        onBlur={()=>alteraNome(nome)}
        />
        <View style={[styles.textInput,{justifyContent:"center"}]}>
            <Text style={{color : "white",
            fontSize : fontSize.semi_small,
            fontFamily:fontFamily.fontFamilyRegular
            }}>{user ? user.email :""}</Text>
        </View>
        <View style={[styles.textInput,{justifyContent:"center"}]}>
            <Text style={{color : "white",
            fontSize : fontSize.semi_small,
            fontFamily:fontFamily.fontFamilyRegular
            }}>**********</Text>
        </View>
        <Text onPress={()=>SignOut()} style={{alignSelf:"center",fontFamily : fontFamily.fontFamilyRegular,color:"white",marginTop:40,fontSize:fontSizePercentage(18)}}>Sair</Text>
        <Text onPress={()=>null} style={{alignSelf:"center",fontFamily : fontFamily.fontFamilyRegular,color:"white",marginTop:10,fontSize:fontSizePercentage(18)}}>Versão 0.0.7</Text>
        </ScrollView>
         </View>
        
      </View>
  )
}

export default editarPerfil;

const styles = StyleSheet.create({
  textInput : {
    paddingLeft :18,
    color : "white",
    fontSize : fontSize.semi_small,
    fontFamily:fontFamily.fontFamilyRegular,
    backgroundColor:colors.secundary,
    height : heightPercentageToDP(8),
    flex:1,
    
  },
  text : {
   color : "white",
   fontSize : fontSize.semi_small,
   width : widthPercentageToDP(80),
   alignSelf:"center",
   marginTop:40,
   marginBottom:20,
   fontWeight : "600"
  }
})