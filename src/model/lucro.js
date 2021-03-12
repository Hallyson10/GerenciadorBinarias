import firebase from '../services/api';
//userId
//gerenciamento

export async function resetLucro(){
    try {
        const user = await firebase.auth().currentUser;
        await firebase.database().ref("conta").child(user.uid).child("lucroTotal").set({
            lucroTotal : 0
        })
        return true;
    } catch (error) {
        return false
    }
}

export async function setLucro({lucro}){
    try {
        const user = await firebase.auth().currentUser;
        const resul = await (await firebase.database().ref("conta").child(user.uid).child("lucroTotal").once("value")).toJSON()
        await firebase.database().ref("conta").child(user.uid).child("lucroTotal").set({
            lucroTotal : resul ? parseFloat(resul.lucroTotal) + lucro : lucro,
        })
        return true;
    } catch (error) {
        return false
    }
}
export async function findLucroTotal(){
    try {
        const user = await firebase.auth().currentUser;
        const resul = await (await firebase.database().ref("conta").child(user.uid).child("lucroTotal").once("value")).toJSON();
        return {sucess : true, lucroTotal : parseFloat(resul.lucroTotal).toFixed(2)};
    } catch (error) {
        return { sucess : false, lucroTotal : 0}
    }
}