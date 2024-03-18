import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import axiosPrueba from "./API/axiosPrueba";
import { theme } from "../theme/theme";
import styleComponent from "../theme/styleComponent";


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
            <View style={styleComponent.view}>
                {jsonData ? (
                    <Text style={styleComponent.textSecondary}>{jsonData}</Text>
                ) : (
                    <Text style={styleComponent.textSecondary}>Cargando información...</Text>
                )}
            </View>
        </ScrollView>
    );
}
