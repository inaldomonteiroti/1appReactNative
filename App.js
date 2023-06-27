import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Cesta from './src/telas/Cesta';
import { useFonts } from 'expo-font';

import AppLoading from 'expo-app-loading';

import mock from './src/mocks/cesta';

export default function App() {

  const [fonteCarregada] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Thin': require('./assets/fonts/Inter-Medium.ttf')
  });

  if(!fonteCarregada){
    return <AppLoading/>
  }

  return (
  <SafeAreaView style={{flex:1}}>
     <StatusBar />
     <Cesta {...mock} />      
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
