import { StyleSheet } from 'react-native';
import { theme } from './theme';

const styleComponent = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center', // Centra verticalmente
        alignItems: 'center', // Centra horizontalmente
    },

    card: {
        flexDirection: theme.container.card.view.flexDirection,
    },

    container: {
        backgroundColor: theme.colors.primary,

    },
    textPrimary: {
        fontFamily: theme.fonts.regular,
        fontSize: 50,
        color: theme.colors.primary,
    },

    textSecondary: {
        fontFamily: theme.fonts.secondary,
        fontSize: 50,
        color: theme.colors.secondary,

    },

    imagePrimary: theme.images.primary,
    imageThumbnail: theme.images.thumbnail,

});

export default styleComponent;
