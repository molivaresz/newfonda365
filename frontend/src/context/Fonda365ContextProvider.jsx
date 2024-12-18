import { createContext, useEffect, useState} from "react";
import axios from "axios";

export const Fonda365Context = createContext();

const FONDA365API_URL = "https://newfonda365.onrender.com";

const Fonda365ContextProvider = ({ children }) => {
    const [dataProducto, setDataProducto] = useState([])
    const [dataCategoria, setDataCategoria] = useState([])
    const [dataComentarios, setDataComentarios] = useState([])
    const [dataComunas, setDataComunas] = useState([])
    const [dataSesion, setDataSesion] = useState([])

    //PRODUCTOS
    const getProductos = async () => {
        try {
            axios.get(FONDA365API_URL + "/producto/obtener_producto").then((response) => {
                setDataProducto(response.data); 
                console.log("dataProducto: " + dataProducto)
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

    //USUARIOS
    const crearUsuario = async (nombre,apellido,correo,password,ciudad,comuna,fechanac) => {
        try {
            axios
            .post(FONDA365API_URL + "/usuario/registra_usuario", {"nombre": nombre, "apellido": apellido, "correo": correo, "password": password, "ciudad": ciudad, "comuna": comuna, "fechanacimiento":fechanac})
            .then((response) => {
                console.log(response.data.message)
                console.log(response.data)
                alert(response.data.message)
            });
        } catch (error) {
            console.log(error);
        }
    };

    const iniciarUsuario = async (correo,password) => {
        let token = ""

        axios
        .post(FONDA365API_URL + "/usuario/login", {"correo": correo, "password": password})
        .then((response) => {
            if (response.status === 200) {
                token = response.data;

                autorizacionUsuario(token)
            }
        }).catch(error => {
            const codigo = error.response.status
            const mensaje = error.response.data.message
            console.log('{"code":"' + codigo + '","message":"' + mensaje + '"}');
        });
    }; 

    const autorizacionUsuario = async (token) => {
        try {
            axios
            .get(FONDA365API_URL + "/usuario/autorizacion_usuario", {
                headers: {Authorization: `Bearer ${token}`}
            })
            .then((response) => {
                setDataSesion(response.data)
                console.log(response.data.status)
                console.log(response.data.message)
                
            });
        } catch (error) {
            console.log(error);
        }
    }

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
        dataComentarios, setDataComentarios, 
        crearUsuario, 
        iniciarUsuario,
        dataSesion, setDataSesion}}>
            {children}
        </Fonda365Context.Provider>
    );
}

export default Fonda365ContextProvider