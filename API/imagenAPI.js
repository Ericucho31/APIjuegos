import axios from "axios";
import axiosData from "./axiosData";

const showImage = async () => {
    //const clientId = 'u9tda5brz41clofobw4etf5nxmnb1t';
    //const accessToken = '8d8zcv6wo91mu195qy0640v8pzg148';

    const gameData = await axiosData();
    const cover = await gameData[0].cover.url;
    const url = `https:${cover}`
    const modifiedUri = url.replace('/t_thumb/', '/t_1080p/');
    console.log(`URL: ${modifiedUri}`)
    return modifiedUri;

    //Pensé que iba a tener que hacer otra petición GET con los headers y las credenciales, pero no fue así
    /*try {
        console.log (cover);
        console.log(`https:${cover}`)
        const response = await axios.get(
            `https:${cover}`,
            {},
            {
              headers: {
                'Client-ID': clientId,
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'text/plain'
              }
            }
          );
        return response.data;
    } catch (error) {
        throw error;
    }*/
};

export default showImage;