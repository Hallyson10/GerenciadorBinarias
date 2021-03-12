import React, { useContext,createContext, useState, useEffect,useCallback } from "react";
import { createUser,signInWithEmail,Logout,resetSenha } from "../model/usuario";
import { Alert } from "react-native";
import { useGerenciamento } from "./gerenciamento";
import { useHistorico } from "./historico";
import { useLucro } from "./lucro";
import { usePlay } from "./play";

const LoginContext = createContext({
    email : "",
    senha : "",
    logged : false,
    loadingLogin : false,
    loadingCadastro : false,
    user : null,
    emailRedefine : "",
    loadingRedefineSenha : false,
    primeiroAcesso : false,
    setPrimeiroAcesso : () =>{},
    setEmailRedefine : ()=>{},
    setEmail : ()=>{},
    setSenha : ()=>{},
    setNome : ()=>{},
    Login : ()=>{},
    SignOut : ()=>{},
    Register : () => {},
    setLogged : ()=>{},
    setUser: ()=>{},
    RedefinirSenha : ()=>{},
});

export default function loginProvider({children}){
    const [user,setUser] = useState(null);
    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [primeiroAcesso,setPrimeiroAcesso] = useState(false);
    const [emailRedefine,setEmailRedefine] = useState("");
    const [emailRedefiniu,setEmailRedefiniu] = useState(0);
    const [loadingRedefineSenha,setLoadingRedefineSenha] = useState(false);
    const [loadingLogin,setLoadLogin] = useState(false);
    const [loadingCadastro,setLoadingRegister] = useState(false);
    const [logged,setLogged] = useState(false);
    const { setGerenciamento } = useGerenciamento();
    const { setHistory } = useHistorico();
    const { setLucroTotal } = useLucro();
    const { setStopLoss, setStopWin } = usePlay();

    const SignOut = async () => {
        await Logout()
        setLogged(false);
        setUser(null);
        setNome("");
        setEmail("");
        setSenha("");
        setLoadLogin(false);
        setLoadingRegister(false);
        setGerenciamento({id : "",title:""});
        setHistory([]);
        setLucroTotal(0);
        setStopLoss(false);
        setStopWin(false);
    }

    const Login = () => {
            async function login(){
                setLoadLogin(true);
                const res = await signInWithEmail({email,senha});
                if(!res.sucess){
                    Alert.alert("Ops!",res.messageError)
                }
                setPrimeiroAcesso(true);
                setLoadLogin(false);
            }
            login();
    }
    const RedefinirSenha = async (email) => {
        if(email === ""){
            Alert.alert("Ops!","Por favor preencha o campo de e-mail!")
        }else if(emailRedefiniu <= 1){
            setLoadingRedefineSenha(true);
            const res = await resetSenha(email);
            if(res.sucess){
                setEmailRedefiniu((emailRedefiniu + 1));
                Alert.alert("Link de redefinição enviado!","Link de redefinição enviado com sucesso! Verifique sua caixa de spans");
                setLoadingRedefineSenha(false);
            }
        }else{
            Alert.alert("Link de redefinição enviado!","Link de redefinição enviado com sucesso! Verifique sua caixa de spans")
            setLoadingRedefineSenha(false);
        }
        
    }

    const Register = () => {
        async function register(){
            setLoadingRegister(true);
            const res = await createUser({nome, email, senha});
            if(!res.sucess){
                Alert.alert("Ops!",res.messageError);
            }
            setPrimeiroAcesso(true);
            setLoadingRegister(false);
        }
        register()
    }

    return(
        <LoginContext.Provider
        value={{
            nome : nome,
            email : email,
            senha : senha,
            logged,
            user,
            loadingLogin : loadingLogin,
            loadingCadastro : loadingCadastro,
            emailRedefine,
            loadingRedefineSenha,
            primeiroAcesso,
            setEmail : setEmail,
            setSenha : setSenha,
            setNome : setNome,
            setUser,
            Login,
            SignOut,
            Register,
            setLogged,
            RedefinirSenha,
            setEmailRedefine,
            setPrimeiroAcesso
        }}
        >
            {children}
        </LoginContext.Provider>
    )
}

export function useLogin(){
    const context = useContext(LoginContext);
    return context;
}