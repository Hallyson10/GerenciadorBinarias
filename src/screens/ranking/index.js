import React,{ useState, useEffect } from 'react';
import { View,StyleSheet,Text,FlatList } from 'react-native';
import { Header,AnuncioGroup } from "../../componentes";
import { fontSizePercentage } from "../../helpers/pixelRatios";
import * as WebBrowser from 'expo-web-browser';
import { useRanking } from "../../context/ranking";
import Interstitial from "../admob/interstitial";
import { fontFamily,colors } from "../../fonts";
import { adUnitIDinterstitialRanking } from "../admob/ids";
import Banner from "../admob/banner";
import { adUnitIDbannerRanking } from "../admob/ids";

const ranking = () => {
    const { findRanking,users } = useRanking();

    useEffect(() => {
        findRanking()
    },[])
  return (
      <View style={styles.container}>
        <Header 
            title="Ranking"
            back
        />
        <View style={{flex:1}}>
        <Banner
           style={{position:"relative",alignSelf:"center",margin:10}}
           type="banner"
           id={adUnitIDbannerRanking}
         />
        <FlatList 
            data={users}
            keyExtractor={(_,index) => JSON.stringify(index)}
            renderItem={({item,index})=>(
            <View style={styles.peopleContainer}>
            <Text style={styles.title} >{(index + 1)+"º"}{` `}{item.username}</Text>
            <Text style={styles.title} >$ {parseFloat(item.valor).toFixed(0)}</Text>
            </View>
            )}
        />
        </View>
        <AnuncioGroup
            onPress={()=>WebBrowser.openBrowserAsync('https://t.me/joinchat/Iv4f6fHMNlOKU3rR')}
        />
        <Interstitial id={adUnitIDinterstitialRanking}/>
      </View>
  )
}

export default ranking;
const styles = StyleSheet.create({
    container : {
        backgroundColor:colors.backgroundColor,
        flex:1
    },
    peopleContainer : {
        // backgroundColor:'rgba(52, 52, 52, 0.8)',
        borderTopWidth:0.5,
        borderBottomWidth :0.5,
        borderColor:"#4F4F4F",
        flexDirection : "row",
        alignItems:"center",
        paddingHorizontal:20,
        justifyContent:"space-between",
        paddingVertical:10
    },
    title : {
        fontSize : fontSizePercentage(18),
        color : "white",
        fontFamily : fontFamily.fontFamilyMedium,
        textAlign : "justify",
        marginBottom : 10,
        marginTop:10,
      },

})