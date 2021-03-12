import React,{ useState, useEffect } from 'react';
import { View, StyleSheet,Image,Text,ImageBackground,KeyboardAvoidingView,Platform,Alert } from 'react-native';
import { widthPercentageToDP,heightPercentageToDP,fontSizePercentage } from "../../helpers/pixelRatios";
import BotaoConfirmacao from "../../componentes/botaoConfirmacao";
import { useNavigation } from '@react-navigation/native';
import FormLogin from "./formLogin";
import FormRegister from "./formRegister";
import ButtonOption from "./buttonOption";
import { useLogin } from "../../context/usuario";
import firebase from "../../services/api";
import { fontFamily,colors } from "../../fonts";

const login = () => {
  const [option,setOption] = useState("entrar");
  const { primeiroAcesso,nome ,email, senha,loadingLogin,loadingCadastro,setUser,setLogged,setNome,setEmail, setSenha,Login,Register } = useLogin();
  const navigation = useNavigation();
 
  useEffect(() => {
    async function find(){
      await firebase.auth().onAuthStateChanged((usuario)=>{
        if(usuario){
          setUser(usuario)
          setLogged(true)
        }else{
          setLogged(false)
        }
    })
    }
    find()
  },[])
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={{flex:1,backgroundColor: colors.backgroundColor}}
    >
      <View style={{flex:1,backgroundColor:colors.backgroundColor}}>
          <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
         
          <Image
                source={require("../../../assets/iconLogo.png")}
                style={{height:heightPercentageToDP(50),width:widthPercentageToDP(50)}}
              />
          </View>
          
          <View style={{flex:1.2,alignItems:"center",marginTop:-50}}>
              <ButtonOption
                setOption={(option)=>setOption(option)}
                option={option}
              />
              {option === "cadastrar"? <FormRegister
              nome={nome}
              email={email}
              senha={senha}
              onChangeNome={text => setNome(text)}
              onChangeEmail={text => setEmail(text)}
              onChangeSenha={text => setSenha(text)}
              /> : <FormLogin
              email={email}
              senha={senha}
              onChangeEmail={text => setEmail(text)}
              onChangeSenha={text => setSenha(text)}
              />}
              {option === "entrar" ?<Text onPress={()=>navigation.navigate("RedefinirSenha")} style={styles.text}>Esqueceu a senha?</Text> : null}
              <BotaoConfirmacao
              loading={loadingLogin || loadingCadastro}
                onPress={()=>{
                  if(option === "entrar"){
                    async function loggin(){
                      if(email === "" && senha === ""){
                        Alert.alert("Ops!","Por favor, preencha os campos de entrada!")
                      }else{
                        Login()
                      }
                    }
                    loggin()
                    //navigation.navigate("Home");
                  }else if(option === "cadastrar"){
                    async function create(){
                      if(nome === "" && email === "" && senha === ""){
                        Alert.alert("Ops!","Por favor, preencha os campos de cadastro!")
                      }else{
                        Register()
                      }
                    }
                    create()
                  }
                }}
                styles={{marginTop:40}}
                title={option==="entrar" ? "ENTRAR" : "CADASTRAR"}
              />
          </View>
          
      </View>
      </KeyboardAvoidingView>
  )
}

export default login;

const styles = StyleSheet.create({
    text : {
      fontSize : fontSizePercentage(18),
      color : "white",
      marginTop:10,
      alignSelf:"flex-end",
      marginRight : 40,
      fontFamily : fontFamily.fontFamilyRegular
    }
      
})