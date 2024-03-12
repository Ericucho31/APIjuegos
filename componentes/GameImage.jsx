import React, { useEffect, useState } from "react";
import { Image, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import showImage from "../API/imagenAPI";

export default function GameImage( props ) {
    const [coverData, setcoverData] = useState(null);

    useEffect(() => {

        const fetchImage = async () => {
            setcoverData(await showImage({juego: props.nombre}));
        };
        fetchImage();
    }, []);

    return (
        <ScrollView contentContainerStyle={imagen.scrollView}>
            <View style= {imagen.view}>
                {coverData ? (
                    <Image
                        source={{ uri: coverData }}
                        style={imagen.image}
                    />
                ) : (
                    <Text>Cargando imagen...</Text>
                )}
            </View>
        </ScrollView>
    );
}

const imagen = StyleSheet.create({
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

    image: {
    width: 300,
    height: 300,
    flex: 1,
    alignItems: 'center', // Centra verticalmente los elementos
    justifyContent: 'center', // Distribuye el espacio entre los elementos
    backgroundColor: '#FF0F0F',
    padding: 20,
},
})



