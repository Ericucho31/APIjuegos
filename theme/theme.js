import * as Font from 'expo-font'

const getFonts = () => {
    return Font.loadAsync({
        'ArabotoNormal': require('../fonts/Araboto Normal 400.ttf')
    })

}

const [fontsLoaded, fontError] = useFonts({
    'Araboto-Normal': require('../fonts/Araboto_Font_Family_(Fontmirror)/Araboto Bold 400.ttf'),
    'SharpGrotesk': require('../fonts/SharpGrotesk/SharpGrotesk-Medium20.otf'),
  });


export const theme = {
    colors: {
        textPrimary: '#000'
    }
    //useFonts
    //Pokemon: require('ruta')
}