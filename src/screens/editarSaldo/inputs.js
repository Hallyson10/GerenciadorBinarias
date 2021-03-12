import React,{ useState, useEffect} from 'react';
import { View,TouchableOpacity,Text,TextInput,StyleSheet } from 'react-native';
import { useSaldo } from "../../context/saldo";
import { fontFamily,colors,fontSize } from "../../fonts";
import { heightPercentageToDP,fontSizePercentage } from "../../helpers/pixelRatios";

const editarSaldo = (props) => {
    const { saldo, setBanca,salvarMoeda,moeda,setMoeda,saldoEdit,setSaldoEdit } = useSaldo();

    useEffect(() => {
        if(saldo !== ""){
            setSaldoEdit(`${saldo}`)
        }
    },[])

    function Formatar(valor)
    {
        const v = ((valor.replace(/\D/g, '') / 100).toFixed(2) + '').split('.');
    
        const m = v[0].split('').reverse().join('').match(/.{1,3}/g);
    
        for (let i = 0; i < m.length; i++)
            m[i] = m[i].split('').reverse().join('') + '.';
    
        const r = m.reverse().join('');
    
        return r.substring(0, r.lastIndexOf('.')) + ',' + v[1];
    }

    const setSaldoFormat = (text) =>{
        const newSaldo = Formatar(text) 
        setSaldoEdit(newSaldo)
    }

  return (
    <View style={[styles.retangulo,props.style]}>
    <Text style={styles.titleOption}>Selecione a moeda</Text>
    <View style={{flexDirection:"row"}}>
    <TouchableOpacity 
    onPress={()=>setMoeda("R$")}
    style={[styles.botao,{marginRight:2,backgroundColor:moeda==="R$" ? colors.verde : colors.secundary}]}>
                <Text style={{color : "white",fontFamily:fontFamily.fontFamilyMedium,fontSize:fontSize.semi_small
                }}>R$ Real</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={()=>setMoeda("$")}
    style={[styles.botao,{marginLeft:2,backgroundColor:moeda==="$" ? colors.verde : colors.secundary}]}>
    <Text style={{color : "white",fontFamily:fontFamily.fontFamilyMedium,fontSize:fontSize.semi_small
                }}>$ Dólar</Text>
    </TouchableOpacity>
    </View>
    <Text style={{marginTop:20,fontSize:fontSize.small,color:"white",fontFamily:fontFamily.fontFamilyMedium}}>Saldo da banca atual</Text>

    <View style={{padding:20,borderRadius:12,flexDirection:"row",alignItems:"center",justifyContent:"center",alignSelf:"center",backgroundColor:colors.secundary}}>
    <Text style={styles.text}>{moeda}</Text>
    <TextInput 
        placeholder="R$ 00.00"
        placeholderTextColor='rgba(255, 255, 255, 0.8)'
        style={{fontFamily : fontFamily.fontFamilyMedium,fontSize:fontSize.semi_small,alignSelf:"center",color:"white"}}
        keyboardType="number-pad"
        returnKeyType="done"
        value={saldoEdit.toString()}
        onChangeText={(text)=>setSaldoFormat(text)}
    />
    </View>
 </View>
  )
}

export default editarSaldo;

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:colors.backgroundColor
    },
    text : {
        fontSize : fontSize.medium,
        color : "#fff",
        fontFamily : fontFamily.fontFamilyBold,
        alignSelf:"center",
        maxWidth:250,
        textAlign:"center"
    },
    view : {
        flex:1,
        alignItems : "center",
    },
    viewCentral : {
        height : heightPercentageToDP(50),
        justifyContent:"space-evenly"
    },
    retangulo : {
        padding:12,
        minWidth : "82%",
        backgroundColor : colors.secundary,
        borderWidth : 2,
        borderColor : "rgba(28, 28, 28, 0.8)",
        borderRadius : 12,
        
    },
    botao : {
        minHeight : 40,
        maxHeight : 40,
        flex:1,
        backgroundColor:"black",
        marginTop:10,
        borderRadius : 12,
        alignItems : "center",
        justifyContent : "center"
    },
    titleOption : {
        fontSize:fontSize.small,
        color:"white",
        fontFamily:fontFamily.fontFamilyMedium,
        marginTop:6,
        marginBottom:10
    }
})