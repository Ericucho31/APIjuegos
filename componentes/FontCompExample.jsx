import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { theme } from '../theme/theme';

SplashScreen.preventAutoHideAsync();

export default function FontExample() {
  const [fontsLoaded, fontError] = useFonts({
    'Araboto-Normal': require('../fonts/Araboto_Font_Family_(Fontmirror)/Araboto Bold 400.ttf'),
    'SharpGrotesk': require('../fonts/SharpGrotesk/SharpGrotesk-Medium20.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{ fontFamily: 'SharpGrotesk', fontSize: 30 ,}}>SharpGrotesk</Text>
      <Text style={{ fontSize: 30 }}>Platform Default</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  color: {
    color: theme.colors.primary,
  }
});
