import * as Font from 'expo-font'
import { useFonts } from 'expo-font';

 const cargarFuentes = async () => {
  await Font.loadAsync({
    'SharpGrotesk': require('../fonts/SharpGrotesk/SharpGrotesk-Medium20.otf'),
    'MadimiOne': require('../fonts/Madimi_One/MadimiOne-Regular.ttf'),
  });
};

cargarFuentes();


export const theme = {
  colors: {
    textPrimary: '#0d1b2a', //casi negro
    primary: '#8338ec', //morado
    secondary: '#FB5607' //naranja
  },

  fonts: {
    regular: 'SharpGrotesk',
    secondary: 'MadimiOne'

  },

  images: {
    primary: {
      width: 500,
      height: 500,
      flex: 1,
      alignItems: 'center', // Centra verticalmente los elementos
      justifyContent: 'center', // Distribuye el espacio entre los elementos
      backgroundColor: '#FF0F0F',
      padding: 20,
    },
    thumbnail: {
      width: 250,
      height: 250,
      flex: 1,
      alignItems: 'center', // Centra verticalmente los elementos
      justifyContent: 'center', // Distribuye el espacio entre los elementos
      backgroundColor: '#FF0F0F',
      padding: 20,
    },
  },

  container: {
    card: {
      view: { 
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center', // Centra verticalmente
        alignItems: 'flex-start', // Centra horizontalmente

      },

      image: {
        width: 100,
        height: 100,
        flex: 1,
        alignItems: 'center', // Centra verticalmente los elementos
        justifyContent: 'center', // Distribuye el espacio entre los elementos
        backgroundColor: '#FF0F0F',
        padding: 20,

      },
      text: {
        primary: '#8338ec' //morado
      }

    },
  },

}