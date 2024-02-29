import React, { useEffect, useState } from "react";
import { Image, FlatList, ScrollView, StyleSheet, Text } from 'react-native';
import axiosData from "../API/axiosData";
import showImage from "../API/imagenAPI";

export default function IGDB() {
    const [jsonData, setJsonData] = useState(null);
    const [coverData, setcoverData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axiosData();
            setJsonData(result);
        };

        const fetchImage = async () => {
            const resultImage = await showImage();
            setcoverData(resultImage);
        };

        fetchData();
        fetchImage();
    }, []);

    return (
        <ScrollView>
             {jsonData ? (
                <Text>{JSON.stringify(jsonData, null, 2)}</Text>
            ) : (
                <Text>Cargando...</Text>
            )}

            {coverData ? (
                
                <Image
                  source={{ uri: coverData }}
                  style={imagen.image}
                />
           
            ) : (
                <Text>Cargando imagen...</Text>
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

const imagen = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 200,
      height: 200,
    },
  });


  
  

  