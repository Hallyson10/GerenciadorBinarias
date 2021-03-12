import React,{ useEffect } from 'react';
import {
    AdMobBanner
  } from 'expo-ads-admob';

const admob = (props) => {
  return (
          <AdMobBanner
                style={props.style ?props.style : {position: "absolute", 
                bottom: 0,alignSelf:"center" }}
                bannerSize={props.type ? props.type : "largeBanner"}
                adUnitID={props.id} // Test ID, Replace with your-admob-unit-id
                servePersonalizedAds
                onDidFailToReceiveAdWithError={(err)=>console.log(err)} />
  )
}

export default admob;