import React,{ useEffect } from 'react';
import { View } from 'react-native';
import {
    AdMobInterstitial
} from 'expo-ads-admob';

const admob = (props) => {
    useEffect(() => {
        async function loadAd(){
          await AdMobInterstitial.setAdUnitID(props.id);
          InterstitialAd();
        }
        loadAd()
    },[])
    async function InterstitialAd(){
        await AdMobInterstitial.requestAdAsync({servePersonalizedAds:true});
        await AdMobInterstitial.showAdAsync();
      }
  return (
     <View>
       
     </View>
  )
}

export default admob;