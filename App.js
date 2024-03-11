import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import IGDB from './componentes/IGDB';
import FontExample from './componentes/FontCompExample';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={IGDB}/>
          <Stack.Screen name='SegundaPag' component={FontExample}/>
        </Stack.Navigator>
      </NavigationContainer>     
    
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
