import { createContext, useEffect, useState} from "react";
import axios from "axios";

export const Fonda365Context = createContext();

//const PRODUCTOS_URL = "/productos.json";
const FONDA365API_URL = "http://localhost:3000";

const Fonda365ContextProvider = ({ children }) => {
    const [dataProducto, setDataProducto] = useState([])
    const [dataCategoria, setDataCategoria] = useState([])
    const [dataComentarios, setDataComentarios] = useState([])
    const [dataComunas, setDataComunas] = useState([])

    

    //PRODUCTOS
    const getProductos = async () => {
        try {
            axios.get(FONDA365API_URL + "/producto/obtener_producto").then((response) => {
                setDataProducto(response.data);    
            });
        } catch (error) {
            console.log(error);
        }
    };

    const getCategorias = async () => {
        try {
            axios.get(FONDA365API_URL + "/fonda365/categorias").then((response) => {
                setDataCategoria(response.data);    
            });
        } catch (error) {
            console.log(error);
        }
    };

    const getComentariosxProducto = async (idproducto) => {
        try {
            setDataComentarios([])
            axios
            .post(FONDA365API_URL + "/comentarios/obtener_comentario", {"idproducto": idproducto})
            .then((response) => {
                setDataComentarios(response.data);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const getComunas = async () => {
        try {
            axios.get(FONDA365API_URL + "/fonda365/obtiene_comunas").then((response) => {
                setDataComunas(response.data);    
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProductos()
        getCategorias()
        getComunas()
    }, [])

    return (
        <Fonda365Context.Provider value={{dataProducto, setDataProducto, 
        dataCategoria, setDataCategoria, 
        getComentariosxProducto, 
        dataComunas, setDataComunas, 
        dataComentarios, setDataComentarios}}>
            {children}
        </Fonda365Context.Provider>
    );
}

export default Fonda365ContextProvider