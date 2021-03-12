import React,{ useState,useContext,createContext, } from 'react';
import { saveRanking,getRanking } from "../model/ranking";
import { useSaldo } from "./saldo";

const RankingContext = createContext({
    setRanking : () => {},
    findRanking : () => {},
    users : [],
    setUsers : ()=>{}
});

export default function RankingProvider({children}){
  const [users,setUsers] = useState([]);
  const [buscou,setBuscou] = useState(false);
  const { moeda } = useSaldo()

  const setRanking = async({valor}) => {
        await saveRanking({valor : valor,moeda})
  }
  const findRanking = async() =>{
    if(!buscou){
      const resul = await getRanking()
      if(resul.sucess){
        await setUsers(resul.data)
      }
      setBuscou(true);
    }
            
  }

  return (
      <RankingContext.Provider
        value={{
            setRanking,
            findRanking,
            users,
            setUsers 
        }}
      >
    {children}
      </RankingContext.Provider>
  )
}

export function useRanking(){
    const context = useContext(RankingContext);
    const { setRanking,findRanking,users,setUsers } = context;
    return {
        setRanking,
        findRanking,
        users,
        setUsers
    }
}
