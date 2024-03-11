import axios from "axios";
import axiosData from "./axiosData";

const showImage = async () => {

    const gameData = await axiosData();
    const cover = await gameData[0].cover.url;
    const url = `https:${cover}`
    const modifiedUri = url.replace('/t_thumb/', '/t_1080p/');
    console.log(`URL: ${modifiedUri}`)
    return modifiedUri;
};

export default showImage;