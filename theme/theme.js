import * as Font from 'expo-font'

const getFonts = () => {
    return Font.loadAsync({
        'ArabotoNormal': require('../fonts/Araboto Normal 400.ttf')
    })

}

const theme = {
    colors: {
        textPrimary: '#000'
    }

    //useFonts
    //Pokemon: require('ruta')
}