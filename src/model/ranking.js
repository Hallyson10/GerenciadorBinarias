import firebase from '../services/api';
//ordenar users pelo lucro > orderByChild
export async function getRanking(){
    try {
        const array = []
        await firebase.database().ref("ranking").orderByChild("valor").startAt().once("value",(snapshot) => {
            snapshot.forEach((i)=>{
                const res = i.toJSON();
                if(res.valor >= 0){
                    if(res.moeda === "R$"){
                        const realToDolar = parseFloat(res.valor) / 5;
                        res.valor = realToDolar;
                        array.push(res)
                    }else{
                        array.push(res)
                    }
                }
            })
        })
        return {sucess : true, data : array.sort((a,b)=>{
            return a.valor < b.valor
        })};
    } catch (error) {
        return {sucess : false, data : []}
    }
}
export async function saveRanking({valor,moeda}){
    try {
        const user = await firebase.auth().currentUser;
        const resul = await (await firebase.database().ref("ranking").child(user.uid).once("value")).toJSON();
        await firebase.database().ref("ranking").child(user.uid).set({
            valor : resul !== null? resul.valor + valor : valor,
            id : user.uid,
            username : user.displayName,
            moeda
        })
        return true;
    } catch (error) {
        return false;
    }
}