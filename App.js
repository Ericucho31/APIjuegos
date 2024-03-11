import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import IGDB from './componentes/IGDB';
import FontExample from './componentes/FontCompExample';

export default function App() {
  return (
    
    <View style={styles.container}>
      <FontExample></FontExample>
      <StatusBar style="default" backgroundColor='#FF00FF'  />

      
      
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
