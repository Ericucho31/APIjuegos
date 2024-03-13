import * as Font from 'expo-font'
import { useFonts } from 'expo-font';
/*
const [fontsLoaded, fontError] = useFonts({
    'Araboto-Normal': require('../fonts/Araboto_Font_Family_(Fontmirror)/Araboto Bold 400.ttf'),
    'SharpGrotesk': require('../fonts/SharpGrotesk/SharpGrotesk-Medium20.otf'),
  });*/

export const cargarFuentes = async () => {
  await Font.loadAsync({
    'SharpGrotesk': require('../fonts/SharpGrotesk/SharpGrotesk-Medium20.otf'),
    // Agrega aquí más fuentes si es necesario
  });
};


export const theme = {
  colors: {
    textPrimary: '#0d1b2a', //casi negro
    primary: '#8338ec' //morado
  },

  fonts: {

  },

  images: {
    primary: {
      width: 300,
      height: 300,
      flex: 1,
      alignItems: 'center', // Centra verticalmente los elementos
      justifyContent: 'center', // Distribuye el espacio entre los elementos
      backgroundColor: '#FF0F0F',
      padding: 20,
    },
    thumbnail: {
      width: 100,
      height: 100,
      flex: 1,
      alignItems: 'center', // Centra verticalmente los elementos
      justifyContent: 'center', // Distribuye el espacio entre los elementos
      backgroundColor: '#FF0F0F',
      padding: 20,

    },
      
  },

}