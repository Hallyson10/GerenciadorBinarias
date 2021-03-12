import React, { useContext,createContext, useState, useEffect,useCallback } from "react";
import { Alert } from "react-native";
const TresUmFixoContext = createContext({
        Win : ()=>{},
        Loss : ()=>{},
        saldoAtual : 0,
        banca : 0, //utillizado para manipulação dentro do componente
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
        paused : false
});

export default function TresUmFixoProvider({ children }){
    const [saldoAtual,setSaldoAtual] = useState(0);
    const [banca,setBanca] = useState(0);
    const [stopLoss,setStopLoss] = useState(false);
    const [stopWin,setStopWin] = useState(false);
    const [qtdLoss,setQtdLoss] = useState(0);
    const [qtdWin,setQtdWin] = useState(0);
    const [valorEntrada,setValorEntrada] = useState(0);
    const [lucro,setLucro] = useState(0);
    const [perca,setPerca] = useState(0);
    const [payout,setPayout] = useState(0);
    const [valorStopLoss,setValorStopLoss] = useState("1 LOSS");
    const [valorStopGain,setValorStopGain] = useState("3 GAIN");
    const [qtdEntrada,setQtdEntrada] = useState(0);
    const [paused,setPaused] = useState(false); //verifica se foi pausado

    useEffect(()=>{
        if(!paused){
            const valor = calculaEntrada(saldoAtual);
            if(qtdEntrada === 0){
                setQtdEntrada((qtdEntrada + 1))
            }
            setValorEntrada(valor);
        }
        setBanca(saldoAtual) //setando o saldo atual na banca para manipulação
    },[saldoAtual])


    const calculaEntrada = () => {
        if(!paused){
            var valor = 0;
            if(saldoAtual >= 500){
                valor = (((5/100)*saldoAtual)/2);
                if(valor < 3){
                    valor = 3;
                }
                return valor;
            }else if(saldoAtual < 500){
                valor = (((10/100)*saldoAtual)/3);
                if(valor < 3){
                    valor = 3;
                }
                return valor;
            }
        }else{
            alert("Gerenciamento pausado!")
        }
    }

    const winFunction = () => {
        var lucroAtual = (payout/100) * valorEntrada;
        const l = (lucro + lucroAtual)
        setLucro(l);
        setBanca((banca + lucroAtual));
    }
    const verificaStopWin = ()=>{
        if((qtdWin) >= 2 ){
            setStopWin(true);
            return true;
        }else{
            return false;
        }
    }

    const Win = () => {
        if(!paused){
            if(!stopLoss && !verificaStopWin()){
                winFunction();
                setQtdWin((qtdWin + 1));
                setQtdEntrada((qtdEntrada + 1))
            }else if(!stopWin && !stopLoss){
                winFunction();
                reset()
                Alert.alert("Parabéns!","Você bateu seu stop win hoje, volte amanhã e vamos garantir nossa consistência!")
            }else if(stopWin){
                Alert.alert("Parabéns!","Você bateu seu stop win hoje, volte amanhã e vamos garantir nossa consistência!")
            }
            else if(stopLoss){
                Alert.alert("Ops!","Você bateu seu stop loss hoje, volte amanhã e vamos garantir nossa consistência!")
            }
        }else{
            Alert.alert("Ops","Gerenciamento pausado, clique em continuar!")
        }
    }

    const verificaStopLoss = () => {
            if((qtdLoss+1) >= 1){
                setStopLoss(true);
                reset()
                return true;
            }else{
                return false
            }
    }

    const lossFunction = () => {
                const p = (lucro - valorEntrada)
                setLucro(p);
                setBanca((banca - valorEntrada));
    }

    const Loss = () => {
        if(!paused){
            if(!verificaStopLoss() && !stopWin){
                lossFunction();
                setQtdLoss((qtdLoss + 1))
                setQtdEntrada((qtdEntrada + 1))
            }else if(stopWin){
                Alert.alert("Parabéns!","Você bateu seu stop win hoje, volte amanhã e vamos garantir nossa consistência!")
            }
            else if(!stopLoss && !stopWin){
                lossFunction();
                reset()
                Alert.alert("Ops!","Você bateu seu stop loss hoje, volte amanhã e vamos garantir nossa consistência!")
            }else if(stopLoss){
                Alert.alert("Ops!","Você bateu seu stop loss hoje, volte amanhã e vamos garantir nossa consistência!")
            }
            
        }else{
            Alert.alert("Ops","Gerenciamento pausado, clique em continuar!")
        }
    }
    const reset = ()=> {
            setQtdEntrada(0);
            setValorEntrada(0);
    }
    const stop = () => {
       
    }
    return(
            <TresUmFixoContext.Provider
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
                paused,
                stop,
                setSaldoAtual : (text)=>setSaldoAtual(text),
                Win : Win,
                Loss : Loss,
                setPayout,
                banca
            }}
            >
                {children}
            </TresUmFixoContext.Provider>
    )
}

export function useTresUmFixo(){
    const context = useContext(TresUmFixoContext);
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
        paused,
        stop,
        banca
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
            paused,
            stop,
            banca
        }
}