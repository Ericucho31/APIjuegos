import axios from 'axios';

const axiosPrueba = async ({nombre}) => {
  const clientId = 'u9tda5brz41clofobw4etf5nxmnb1t';
  const accessToken = '8d8zcv6wo91mu195qy0640v8pzg148';
  const hola= "puyo puyo";

  try {
    const response = await axios.post(
      'https://api.igdb.com/v4/games',
      `fields *, cover.*; search "${nombre}"; limit 1;`,
      {
        headers: {
          'Client-ID': clientId,
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'text/plain'
        }
      }
    );
    console.log(response.data[0].name); 
    return response.data;

  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw error;
  }
};

export default axiosPrueba;

