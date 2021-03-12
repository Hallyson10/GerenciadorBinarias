import React from 'react';
import { View,TextInput,StyleSheet,Text,Alert } from 'react-native';
import { Header,BotaoConfirmacao } from "../../componentes";
import { useLogin } from "../../context/usuario";
import { heightPercentageToDP,fontSizePercentage,widthPercentageToDP } from "../../helpers/pixelRatios";
import { fontFamily,colors,fontSize } from "../../fonts";

const resetSenha = (props) => {
    const { RedefinirSenha, emailRedefine,loadingRedefineSenha, setEmailRedefine } = useLogin();

  return (
      <View style={{flex:1,backgroundColor:colors.backgroundColor}}>
        <Header
            title="Redefinir senha"
            back
        />
        <Text style={styles.text}>Enviaremos um link de redefinição de senha para seu e-mail</Text>
        <TextInput
        style={[styles.textInput]}
        placeholder="Email"
        autoCapitalize="words"
        placeholderTextColor='rgba(242, 242, 242, 0.4)'
        value={emailRedefine}
        onChangeText={setEmailRedefine}
        />
        <BotaoConfirmacao
            title="Enviar link"
            loading={loadingRedefineSenha}
            onPress={() => {
                if(emailRedefine !== ""){
                    RedefinirSenha(emailRedefine)
                }else{
                    Alert.alert("Ops!","Por favor preencha o campo de e-mail!")
                }
            }}
        />
      </View>
  )
}

export default resetSenha;

const styles = StyleSheet.create({
   textInput : {
     borderRadius : 20,
     paddingLeft :18,
     color : "white",
     fontSize : fontSize.semi_small,
     backgroundColor:colors.secundary,
     height : heightPercentageToDP(8),
     width : widthPercentageToDP(80),
     alignSelf:"center",
     marginBottom : 40
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