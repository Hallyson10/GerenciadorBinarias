import React,{ useState,useContext,createContext, } from 'react';
import { findLucroTotal,setLucro,resetLucro } from "../model/lucro";

const LucrosContext = createContext({
  lucroTotal : "",
  setLucroTotal : () => {},
  getLucroTotal : () => {},
  saveLucroTotal : () => {},
  reiniciarLucros : () =>{}
});

export default function LucrosProvider({children}){
  const [lucroTotal,setLucroTotal] = useState(0);
  const reiniciarLucros = async() =>{
        await resetLucro();
        setLucroTotal(0);
  }
  const saveLucroTotal = async(lucro) => {
        await setLucro({lucro : parseFloat(lucro)})
  }
  const getLucroTotal = async() =>{
        const lucro = await findLucroTotal();
        if(lucro.sucess){
          setLucroTotal(lucro.lucroTotal)
        }
  }

  return (
      <LucrosContext.Provider
        value={{
        lucroTotal,
        setLucroTotal,
        getLucroTotal,
        saveLucroTotal,
        reiniciarLucros
        }}
      >
    {children}
      </LucrosContext.Provider>
  )
}

export function useLucro(){
    const context = useContext(LucrosContext);
    return context;
}
