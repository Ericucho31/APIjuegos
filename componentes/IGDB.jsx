import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text } from 'react-native';
import axiosData from "../API/axiosData";

export default function IGDB() {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axiosData();
            setJsonData(result);
        };

        fetchData();
    }, []);

    return (
        <ScrollView>
             {jsonData ? (
                <Text>{JSON.stringify(jsonData, null, 2)}</Text>
            ) : (
                <Text>Cargando...</Text>
            )}
        </ScrollView>
           
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
  
  

  