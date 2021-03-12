import firebase from '../services/api';
import moment from 'moment';
import { Alert } from "react-native"
//userId
//gerenciamento

export async function updateGerenciamento({gerenciamento}){
    try {
            const user = await firebase.auth().currentUser;
            await firebase.database().ref("usuarios").child(user.uid).child("gerencimento").set({
                id : gerenciamento.id,
                title : gerenciamento.title,
                dataUpdate : firebase.database.ServerValue.TIMESTAMP,
                stopGain : gerenciamento.stopGain,
                stopLoss : gerenciamento.stopLoss,
                payoutMin : gerenciamento.payoutMin
            })
            return true;
    } catch (error) {
        return false
    }
}

export async function getGerenciamentoOption(){
    try {
        const user = await firebase.auth().currentUser;
        const resul = await (await firebase.database().ref("usuarios").child(user.uid).child("gerencimento").once("value")).toJSON();
        return resul;
    } catch (error) {
        return false
    }
}

export async function salvarPayout(payout){
    try {
        const user = await firebase.auth().currentUser;
        await firebase.database().ref("usuarios").child(user.uid).child("payout").set({
        payout     
        })
        return { sucess : true};
    } catch (error) {
        return { sucess : false}
    }
}
export async function buscaPayout(){
    try {
        const user = await firebase.auth().currentUser;
        const res = await (await firebase.database().ref("usuarios").child(user.uid).child("payout").once("value")).toJSON()
        return { sucess : true,payout : res.payout};
    } catch (error) {
        return { sucess : false, payout : 0}
    }
}