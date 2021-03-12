import React,{ useEffect } from 'react';
import { View } from 'react-native';
import {
    AdMobBanner,
    AdMobInterstitial,
    setTestDeviceIDAsync
  } from 'expo-ads-admob';

const admob = () => {
  return (
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
          <AdMobBanner
                bannerSize="banner"
                adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                servePersonalizedAds // true or false
                setTestDeviceIDAsync
                onDidFailToReceiveAdWithError={(err)=>console.log(err)} />
      </View>
  )
}

export default admob;