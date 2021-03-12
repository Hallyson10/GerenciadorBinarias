import React,{ useEffect, useCallback} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { View } from "react-native"
import { 
  Home,SelecionarNivel,
  Play, 
  EditarSaldo,
  GerenciamentoScreen,
  SelectPerfil,
  Ranking,
  Login,
  Historico,
  RedefinirSenha,
  Cursos,
  InformacoesGerenciamento,
  SaldoBoasVindas,
  GerenciamentoPago,
  Configuracoes,
  Inicial
 } from "../screens";
import { createStackNavigator,CardStyleInterpolators,TransitionPresets } from '@react-navigation/stack';
import { useLogin } from "../context/usuario";
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";

const Stack = createStackNavigator();

const EntrarRotas = () => (
  <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
              gestureEnabled :true,
              gestureDirection:'horizontal',
              ...TransitionPresets.SlideFromRightIOS,
              cardStyleInterpolator : CardStyleInterpolators.forHorizontalIOS,
              
            }}
            animation="fade"
            headerMode="float"
        >
            <Stack.Screen 
            name="Login"
            component={Login}
            options={{
              headerShown:false,
            }}
            />
            <Stack.Screen 
            name="RedefinirSenha"
            component={RedefinirSenha}
            options={{
              headerShown:false,
            }}
            />
           
        </Stack.Navigator>
  </NavigationContainer>
)

function App() {
    const { logged,primeiroAcesso } = useLogin();
    let [fontsLoaded] = useFonts({
      'RedHatText-Bold' : require("../../assets/RedHatText-Bold.ttf"),
      'RedHatText-Medium' : require("../../assets/RedHatText-Medium.ttf"),
      'RedHatText-Regular' : require("../../assets/RedHatText-Regular.ttf"),
  
    });
  
    if (!fontsLoaded) {
      return <View />;
    }
    if(!logged){
      return EntrarRotas()
    }
    
    return (
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
              gestureEnabled :true,
              gestureDirection:'horizontal',
              ...TransitionPresets.SlideFromRightIOS,
              cardStyleInterpolator : CardStyleInterpolators.forHorizontalIOS,
              
            }}
            animation="fade"
            headerMode="float"
        >
          <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            headerShown:false,
          }}
           />
          <Stack.Screen 
          name="Play"
           component={Play}
           options={{
            headerShown:false,
          }}
            />
            <Stack.Screen 
          name="EditarSaldo"
           component={EditarSaldo}
           options={{
            headerShown:false,
          }}
            />
            <Stack.Screen 
          name="SaldoBoasVindas"
           component={SaldoBoasVindas}
           options={{
            headerShown:false,
          }}
            />
            <Stack.Screen 
            name="GerenciamentoScreen"
            component={GerenciamentoScreen}
            options={{
              headerShown:false,
            }}
            />
            <Stack.Screen 
            name="GerenciamentoPago"
            component={GerenciamentoPago}
            options={{
              headerShown:false,
            }}
            />
            <Stack.Screen 
            name="SelectPerfil"
            component={SelectPerfil}
            options={{
              headerShown:false,
            }}
            />
            <Stack.Screen 
            name="Ranking"
            component={Ranking}
            options={{
              headerShown:false,
            }}
            />
             <Stack.Screen 
            name="Historico" 
            component={Historico}
            options={{
            headerShown:false,
            }}
           />
           <Stack.Screen 
            name="SelecionarNivel" 
            component={SelecionarNivel}
            options={{
            headerShown:false,
            }}
           />
           <Stack.Screen 
            name="Cursos" 
            component={Cursos}
            options={{
            headerShown:false,
          }}
           />
           <Stack.Screen 
            name="informacoesGerenciamento" 
            component={InformacoesGerenciamento}
            options={{
            headerShown:false,
          }}
           />
            <Stack.Screen 
            name="Configuracoes"
            component={Configuracoes}
            options={{
              headerShown:false,
            }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;