import React, { useEffect, useState } from "react";
import { Image, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import showImage from "./API/imagenAPI";
import { theme } from "../theme/theme";

export default function GameImage(props) {
    const [coverData, setcoverData] = useState(null);

    useEffect(() => {

        const fetchImage = async () => {
            setcoverData(await showImage({ juego: props.nombre }));
        };
        fetchImage();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.view}>
                {coverData ? (
                    <Image
                        source={{ uri: coverData }}
                        style={styles.image}
                    />
                ) : (
                    <Text>Cargando imagen...</Text>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    view: {
        flex: 1,
        justifyContent: 'center', // Centra verticalmente
        alignItems: 'center', // Centra horizontalmente
    },

    image: theme.images.primary,
})



