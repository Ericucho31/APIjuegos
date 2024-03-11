import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import axiosData from "../API/axiosData";


export default function DisplayGameData() {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setJsonData(await axiosData());
        };

        fetchData();
        console.log(jsonData)
    }, []);

    return (
        <ScrollView>
            <View style={styles.view}>
                {jsonData ? (
                    <Text>{JSON.stringify(jsonData, null, 2)}</Text>
                ) : (
                    <Text>Cargando información...</Text>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view: {
        flex: 1,
        justifyContent: 'center', // Centra verticalmente
        alignItems: 'center', // Centra horizontalmente
    },

});

