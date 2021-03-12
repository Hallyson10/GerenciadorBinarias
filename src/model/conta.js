import firebase from '../services/api';
import { Alert } from "react-native"
//userId
//lucro
//saldoBanca
//historico : {data : saldo}
const usuariosRef = firebase.database().ref("usuarios");
const contaRef = firebase.database().ref("conta");


export async function updateSaldo({valor}){
    try {
        const user = await firebase.auth().currentUser;
        await contaRef.child(user.uid).child("saldo").set({
            saldo : valor
        })
        //Alert.alert("Salvo com sucesso!","Seu saldo foi atualizado com sucesso!")
        return true;
    } catch (error) {
        Alert.alert("Ops!","Ocorreu um erro inesperado, verifique sua conexão com a internet e tente novamente!")
        return false
    }
}
export async function getSaldo(){
    try {
        const user = await firebase.auth().currentUser;
        const resul = await contaRef.child(user.uid).child("saldo").once("value");
        return {sucess : true, saldo : parseFloat(resul.toJSON().saldo)};
    } catch (error) {
        return { sucess : false, saldo : null}
    }
}
export async function saveMoeda(moeda){
    try {
        const user = await firebase.auth().currentUser;
        await contaRef.child(user.uid).child("moeda").set({
            moeda
        })
        return { sucess : true}
    } catch (error) {
        return { sucess : false}
    }
}

export async function getMoeda(){
    try {
        const user = await firebase.auth().currentUser;
        const moeda = await (await contaRef.child(user.uid).child("moeda").once("value")).toJSON()
        return { sucess : true,moeda : moeda.moeda}
    } catch (error) {
        return { sucess : false, moeda : "R$"}
    }
}