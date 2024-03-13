import axiosData from "../../compGuardados/axiosData"
import axiosPrueba from "./axiosPrueba";
import showImage from "./imagenAPI"

const RenderJuego= async ({nombreJuego}) => {
    const JSONresultante = await axiosPrueba({nombre: nombreJuego});
    console.log(JSONresultante);
    
    const urlImagen = await showImage({JSONresultante});
    console.log(urlImagen);
    
    const mergedObject = await{ ...JSONresultante, ...urlImagen };
    console.log(mergedObject);

    return mergedObject;
}

export default RenderJuego;