import React, { createContext, useContext, useState, useEffect } from 'react';
import { getSaldo,updateSaldo,saveMoeda,getMoeda } from "../model/conta";
const SaldoContext = createContext({
    saldo : "",
    lucroTotal : "",
    moeda : "R$",
    saldoEdit : "",
    setMoeda : () =>{},
    setSaldo : ()=>{},
    findSaldo : ()=>{},
    setBanca : () => {},
    findLucroTotal : () => {},
    salvarMoeda :()=>{},
    setSaldoEdit : () =>{},
    buscarMoeda : ()=>{}
});

export default function SaldoProvider({ children }){
    const [saldo,setSaldo] = useState("0");
    const [moeda,setMoeda] = useState("R$");
    const [saldoEdit,setSaldoEdit] = useState("");

     const findSaldo = async () => {
            const res = await getSaldo()
            if(res.sucess && res.saldo){
                setSaldo(res.saldo);
            }else{
                setSaldo("0");
            }
    }
    const setBanca = async ({ valor }) => {
        setSaldo(valor);
        await updateSaldo({valor : valor});
    }
    const setSaldoFormat = (valor)=>{
        const value = parseFloat(valor.replace(/[^0-9,.]/g, '').replace(/[.]/g, '').replace(',', '.'));
        setSaldo(value);
    }
    const salvarMoeda = async (moeda) =>{
            const res = await saveMoeda(moeda);
            setMoeda(moeda)
    }

    const buscarMoeda = async() => {
        const res = await getMoeda();
        setMoeda(res.moeda);
    }

    return ( 
        <SaldoContext.Provider
            value={{
                saldo,
                moeda,
                saldoEdit,
                setMoeda,
                setSaldo : setSaldoFormat,
                findSaldo,
                setBanca,
                salvarMoeda,
                setSaldoEdit,
                buscarMoeda
            }}>
            {children}
        </SaldoContext.Provider>
    );
} 

export function useSaldo(){
    const context = useContext(SaldoContext);
    if(!context) throw new Error("tá dando erro nessa peste! O useSaldo só pode ser usado dentro de um saldoProvider!");
    return context;
}