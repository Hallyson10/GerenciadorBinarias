import React,{ useState,useContext,createContext, } from 'react';
import { saveHistory,getHistory } from "../model/historico";

const HistoricoContext = createContext({
  saveHistorico : () => {},
  getHistorico : () => {},
  setHistory : ()=>{},
  history : []
});

export default function HistoricoProvider({children}){
  const [history,setHistory] = useState([]);

  const saveHistorico = async(valor) => {
        await saveHistory({valor : valor})
  }
  const getHistorico = async() =>{
        const res = await getHistory();
        if(res.sucess){
          setHistory(res.data)
        }
  }

  return (
      <HistoricoContext.Provider
        value={{
          saveHistorico,
          getHistorico,
          setHistory,
          history
        }}
      >
    {children}
      </HistoricoContext.Provider>
  )
}

export function useHistorico(){
    const context = useContext(HistoricoContext);
    const { saveHistorico,getHistorico,history,setHistory } = context;
    return {
      saveHistorico,
      getHistorico,
      history,
      setHistory
    }
}
