import firebase from '../services/api';
export async function updateNome({username}) {
    try {
        const user = await firebase.auth().currentUser;
        user.updateProfile({
            displayName : username
        })
        return { sucess : true};
    } catch (error) {
        return {sucess : false};
    }
    
}