import React,{ useState,useContext,createContext, } from 'react';

const PlayContext = createContext({
  stopWin : false,
  stopLoss : false,
  paused: false,
  setStopWin : () => {},
  setStopLoss : () => {},
  setPaused:()=>{}
});

export default function PlayProvider({children}){
    const [stopWin,setStopWin] = useState(false);
    const [stopLoss,setStopLoss] = useState(false);
    const [paused,setPaused] = useState(false);

    return (
        <PlayContext.Provider value={{
            stopWin,
            stopLoss,
            paused,
            setStopWin,
            setStopLoss,
            setPaused
        }}>
            {children}
        </PlayContext.Provider>
    )
  }
  export function usePlay(){
    const context = useContext(PlayContext);
    return context;
}