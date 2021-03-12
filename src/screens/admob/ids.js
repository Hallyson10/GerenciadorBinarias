import { Platform } from "react-native";
import Constants from 'expo-constants';
const testID = 'google-test-id';
const productionID = 'my-id';
// Is a real device and running in production.

export const bannerHistorico = Platform.OS === "ios" ? "ca-app-pub-1968405663085741/5436787604" : "ca-app-pub-1968405663085741/6558297581";
export const interstitialHistorico = Platform.OS === "ios" ? "ca-app-pub-1968405663085741/8104556811": "ca-app-pub-1968405663085741/7021154406";
export const bannerRanking = Platform.OS === "ios" ? "ca-app-pub-1968405663085741/7212726099" : "ca-app-pub-1968405663085741/2619052578";
export const interstitialRanking = Platform.OS === "ios" ? "ca-app-pub-1968405663085741/9376032613":"ca-app-pub-1968405663085741/4394991061";
export const bannerSelectGerenciamento = Platform.OS === "ios" ? "ca-app-pub-1968405663085741/9679284949" : "ca-app-pub-1968405663085741/4011847684";
export const bannerSelectPerfilGerenciamento = Platform.OS === "ios" ? "ca-app-pub-1968405663085741/2792751898" : "ca-app-pub-1968405663085741/4586562758";

export const adUnitIDbannerHistorico = Constants.isDevice && !__DEV__ ? bannerHistorico : "ca-app-pub-3940256099942544/6300978111";
export const adUnitIDinterstitialHistorico = Constants.isDevice && !__DEV__ ? interstitialHistorico : "ca-app-pub-3940256099942544/1033173712";
export const adUnitIDbannerRanking = Constants.isDevice && !__DEV__ ? bannerRanking : "ca-app-pub-3940256099942544/6300978111";
export const adUnitIDinterstitialRanking = Constants.isDevice && !__DEV__ ? interstitialRanking : "ca-app-pub-3940256099942544/1033173712";
export const adUnitIDbannerSelectGerenciamento = Constants.isDevice && !__DEV__ ?bannerSelectGerenciamento : "ca-app-pub-3940256099942544/6300978111";
export const adUnitIDbannerSelectPerfilGerenciamento = Constants.isDevice && !__DEV__ ?bannerSelectPerfilGerenciamento : "ca-app-pub-3940256099942544/6300978111";
