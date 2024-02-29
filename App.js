import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import IGDB from './componentes/IGDB';

export default function App() {
  return (
    
    <View style={styles.container}>
      <StatusBar style="default" backgroundColor='#FF00FF'  />

      <IGDB></IGDB>
      
    </View>

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
