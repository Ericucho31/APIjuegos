import axios from "axios";
import React, {useState, useEffect} from "react";

const axiosViejo = async () => {
    const [data, setData] = useState([]);

    const clientId = 'u9tda5brz41clofobw4etf5nxmnb1t';
    const accessToken = '8d8zcv6wo91mu195qy0640v8pzg148';

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.post('https://api.igdb.com/v4/games',{} ,{
                headers: {
                    'Accept': 'application/json',
                    'Client-ID': clientId,
                    'Authorization': 'Bearer 8d8zcv6wo91mu195qy0640v8pzg148',
                }
            });

            setData(response.data);
        } catch (error) {
            console.error('Error al traer los datos: ' + error);
        }
    };

    return  data ;
};

export default axiosViejo;