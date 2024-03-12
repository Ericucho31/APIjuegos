import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import axiosData from "../compGuardados/axiosData";
import axiosPrueba from "../API/axiosPrueba";


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
                    <Text>{jsonData}</Text>
                ) : (
                    <Text>Cargando información...</Text>
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

});

