import axios from 'axios';

const axiosData = async () => {
  const clientId = 'u9tda5brz41clofobw4etf5nxmnb1t';
  const accessToken = '8d8zcv6wo91mu195qy0640v8pzg148';

  try {
    const response = await axios.post(
      'https://api.igdb.com/v4/games',
      "fields *; where id = 1942;",
      {
        headers: {
          'Client-ID': clientId,
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'text/plain'
        }
      }
    );
    console.log(response.data + " Dentro de AxiosData"); // Aquí puedes manejar los datos obtenidos
    return response.data;

  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw error;
  }
};

export default axiosData;

