import React, { useContext,createContext, useState, useEffect,useCallback } from "react";

const QxdContextSoros = createContext({
        Win : ()=>{},
        Loss : ()=>{},
        saldoAtual : 0,
        valorEntrada : 0,
        setSaldoAtual : (text)=>{},
        stopLoss : false,
        stopWin : false,
        setPayout : (text)=>{},
        lucro : 0,
        perca : 0,
        valorStopLoss : 0,
        valorStopGain : 0,
        qtdEntrada : 0,
        stop : ()=>{},
        start : false
});

export default function QxdProviderSoros({ children }){
    const [saldoAtual,setSaldoAtual] = useState(0);
    const [stopLoss,setStopLoss] = useState(false);
    const [stopWin,setStopWin] = useState(false);
    const [qtdLoss,setQtdLoss] = useState(0);
    const [qtdWin,setQtdWin] = useState(0);
    const [valorEntrada,setValorEntrada] = useState(0);
    const [lucro,setLucro] = useState(0);
    const [perca,setPerca] = useState(0);
    const [payout,setPayout] = useState(0);
    const [valorStopLoss,setValorStopLoss] = useState("2 LOSS");
    const [valorStopGain,setValorStopGain] = useState("4 GAIN");
    const [qtdEntrada,setQtdEntrada] = useState(0);
    const [start,setStart] = useState(false); //verifica se foi pausado

    useEffect(() => {
       
       
    },[saldoAtual])

    const calculaEntrada = () => {
       
    }
    const Win = () => {
       
    }
    const Loss = () => {
       
    }
    const stop = () => {
        
    }
    return(
            <QxdContextSoros.Provider
            value={{
                
                valorEntrada,
                stopLoss,
                stopWin,
                lucro,
                perca,
                saldoAtual,
                valorStopLoss,
                valorStopGain,
                qtdEntrada,
                start,
                stop,
                setSaldoAtual : (text)=>setSaldoAtual(text),
                Win : Win,
                Loss : Loss,
                setPayout,
            }}
            >
                {children}
            </QxdContextSoros.Provider>
    )
}

export function useQxdSoros(){
    const context = useContext(QxdContextSoros);
    const { 
        Win,
        Loss,
        valorEntrada,
        setSaldoAtual,
        stopLoss,
        stopWin,
        setPayout,
        lucro,
        perca ,
        saldoAtual,
        valorStopLoss,
        valorStopGain,
        qtdEntrada,
        start,
        stop,
    } = context;
        return {
            Win,
            Loss,
            valorEntrada,
            setSaldoAtual,
            stopLoss,
            stopWin,
            setPayout,
            lucro,
            perca ,
            saldoAtual,
            valorStopLoss,
            valorStopGain,
            qtdEntrada,
            start,
            stop,
        }
}