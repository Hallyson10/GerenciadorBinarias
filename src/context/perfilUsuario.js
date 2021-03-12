import React,{ useState,useContext,createContext, } from 'react';
import { updateNome } from "../model/editarperfil";
import { useLogin } from "./usuario";

const PerfilContext = createContext({
  nome : "",
  email : "",
  senha : "",
  nomeUpdateSucess : false,
  alteraNome : () =>{},
  setSucessName : ()=>{}
});

export default function LucrosProvider({children}){
    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [nomeUpdateSucess,setSucessName] = useState(false);

    const alteraNome = async (name) => {
        await updateNome({username : name});
        setSucessName(true);
    }
    return(
        <PerfilContext.Provider
        value={{
            nome,
            email,
            senha,
            setNome,
            setEmail,
            setSenha,
            alteraNome,
            nomeUpdateSucess,
            setSucessName
        }}
        >
            {children}
        </PerfilContext.Provider>
    )
}

export function usePerfil(){
    const context = useContext(PerfilContext);
    return context;
}
