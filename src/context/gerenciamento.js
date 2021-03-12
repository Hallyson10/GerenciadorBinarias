import React, { useContext,createContext, useState,useEffect} from "react";
import { updateGerenciamento, getGerenciamentoOption,salvarPayout,buscaPayout } from "../model/gerenciamento";
import { Alert } from "react-native";

const GerenciamentoContext = createContext({
        gerenciamento : {id:"",title:""},
        payout : "",
        setPayout : ()=>{},
        setGerenciamento : (text) => {},
        getGerenciamento : () =>{},
        salvarGerenciamento : () => {},
        sucessGerenciamentoSalvo : false,
        savePayout : ()=>{},
        getPayout: ()=>{}
});

export default function GerenciamentoProvider({ children }){
    const [gerenciamento,setGerenciamento] = useState({id:"",title:""});
    const [sucessGerenciamentoSalvo,setGerenciamentoSalvo] = useState(false);
    const [payout,setPayout] = useState("87");

    const getGerenciamento = async () => {
           const x = await getGerenciamentoOption()
           if(x){
            setGerenciamento(x)
           }
    }
    useEffect(()=>{
        setGerenciamentoSalvo(false)
    },[sucessGerenciamentoSalvo])

    const salvarGerenciamento = async ({optionGerencimento}) => {
            const res = await updateGerenciamento({gerenciamento : optionGerencimento});
            if(res){
                Alert.alert("Parabéns!","Salvo com sucesso!")
                setGerenciamento(optionGerencimento)
                setGerenciamentoSalvo(true);
            }
    }
    const savePayout = async (pay) => {
            const res = await salvarPayout(pay);
    }
    const getPayout = async () => {
        const res = await buscaPayout();
        setPayout(res.payout)
    }
    return(
    <GerenciamentoContext.Provider
    value={{
       gerenciamento,
       payout,
       setPayout,
       setGerenciamento,
       getGerenciamento,
       salvarGerenciamento ,
       sucessGerenciamentoSalvo,savePayout,getPayout
    }}
    >
        { children }
    </GerenciamentoContext.Provider>
    )
}

export function useGerenciamento(){
    const context = useContext(GerenciamentoContext);
    return context;
}
