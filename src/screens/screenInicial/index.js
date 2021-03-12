import React from 'react';
import { View,ImageBackground } from 'react-native';
import { heightPercentageToDP,fontSizePercentage,widthPercentageToDP } from "../../helpers/pixelRatios";
import { fontFamily,colors } from "../../fonts";

const screenInicial = () => {
  return (
      <View style={{flex:1,backgroundColor:"white",alignSelf:"center",justifyContent:"center"}}>
            <ImageBackground 
                source={require("../../../assets/investiment.png")}
                style={{alignSelf:"center",width:widthPercentageToDP(100),minHeight:heightPercentageToDP(40)}}
                resizeMode="contain"
            />
      </View>
  )
}

export default screenInicial;