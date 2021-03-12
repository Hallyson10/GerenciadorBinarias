import firebase from '../services/api';
//userId
//gerenciamento

export async function saveHistory({valor}){
    try {
        const user = await firebase.auth().currentUser;
        const data = new Date().getDate();
        const resul =  await (await firebase.database().ref("historico").child(user.uid).child(data).once("value")).toJSON()
        
        await firebase.database().ref("historico").child(user.uid).child(data).set({
            data : firebase.database.ServerValue.TIMESTAMP,
            status : resul && ((resul.valor + valor) > 0) ? "lucro" : resul && ((resul.valor + valor) < 0) ? "perca" : resul && ((resul.valor + valor) === 0) ? "neutro" :
            valor > 0 ? "lucro" : valor < 0 ? "perca" : "neutro",
            valor : resul ? resul.valor + valor : valor
        })
        return true;
    } catch (error) {
        return false
    }
}
export async function getHistory(){
    try {
        const user = await firebase.auth().currentUser;
        const array =[]
        const resul = await firebase.database().ref("historico").child(user.uid).once("value");
        await resul.forEach((i)=>{
            array.push(i.toJSON())
        })
        const history = array.map((i)=>{
            i.data = new Date(i.data);
            return i;
        })
        return {sucess : true, data : history};
    } catch (error) {
        return {sucess : false, data : []};
    }
}