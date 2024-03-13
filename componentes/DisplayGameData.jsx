import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import axiosPrueba from "./API/axiosPrueba";
import { theme } from "../theme/theme";


export default function DisplayGameData( props ) {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const datos = await axiosPrueba({nombre: props.nombre});
            const nombre = datos[0].name;
            setJsonData(nombre);
        };

        fetchData();
        console.log(jsonData)
    }, []);

    return (
        <ScrollView>
            <View style={styles.view}>
                {jsonData ? (
                    <Text style={styles.text}>{jsonData}</Text>
                ) : (
                    <Text style={styles.text}>Cargando información...</Text>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center', // Centra verticalmente
        alignItems: 'center', // Centra horizontalmente
    },

    text:{
        color: theme.colors.primary,
        fontSize: 50,

    },

});

