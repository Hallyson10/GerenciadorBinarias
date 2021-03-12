import { StatusBar } from 'expo-status-bar';
import React,{ useEffect } from 'react';
//import { LogBox } from "react-native";
import Providers from "./src/context";
import Routes from "./src/routes";
//LogBox.ignoreAllLogs(true);
console.disableYellowBox = true;
export default function App() {
 
  return (
    <Providers>
      <Routes/>
      </Providers>
  );
}
