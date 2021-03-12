import firebase from '../services/api';
import { Alert } from "react-native";
export async function signInWithEmail(payload = {}) {
    try {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const res = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.senha);
        return { sucess : true, user : res.user};
    } catch (error) {
        const message = {}
        message.error = error;
        if(error.code === "auth/user-not-found"){
            message.error = "Usuário não encontrado!"
        }else if(error.code === "auth/invalid-email"){
            message.error = "E-mail inválido!"
        }else if(error.code === "auth/wrong-password"){
            message.error = "Senha inválida, nenhum usuário encontrado!"
        }
        return {sucess : false , messageError : message.error};
    }
    
}
export async function Logout(){
    try {
        await firebase.auth().signOut();
        Alert.alert("Volte sempre!","Saiu com sucesso!")
        return true;
    } catch (error) {
        return false;
    }
}
export async function resetSenha(email = ""){
        try {
            await firebase.auth().sendPasswordResetEmail(email);
            return { sucess : true}
        } catch (error) {
            return { sucess : false}
        }
}

export async function createUser(payload = {}) {
    try {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.senha);
      await res.user.updateProfile({
          displayName : payload.nome
      })
      return { sucess : true, user : res.user }
    } catch (error) {
        const message = {}
        if(error.code === "auth/invalid-email"){
            message.error = "E-mail inválido!"
        }else if(error.code === "auth/weak-password"){
            message.error = "A senha deve conter no mínimo 6 caracteres!"
        }else if(error.code === "auth/email-already-in-use"){
            message.error = "E-mail já cadastrado!"
        }
        return { sucess : false, messageError : message.error}
    }
  }
