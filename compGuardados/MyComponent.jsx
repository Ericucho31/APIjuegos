import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axiosData from '../API/axiosData';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const responseData = await axiosData();
        setData(responseData);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchDataAsync();
  }, []);

  return (
    
    <View style={styles.container}>
      <Text style={styles.text}>
        {data ? JSON.stringify(data) : 'Cargando...'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MyComponent;

