import React from 'react'
import { useContext } from 'react';
import { Fonda365Context } from '../context/Fonda365ContextProvider';

const RegistroUsuario = () => {

    const {crearUsuario, dataComunas, dataMsgRegistraUsuario} = useContext(Fonda365Context)

    const hClickcrearUsuario = (nombre,apellido,correo,password,ciudad,comuna,fechanac) => {
        crearUsuario(nombre,apellido,correo,password,ciudad,comuna,fechanac)
        {
            alert('Ocurrió un error al registrar el usuario.');

       //     <div className="alert alert-success" role="alert">
       //         "hola este es un mensaje"
       //     </div>

        
            dataMsgRegistraUsuario &&
            dataMsgRegistraUsuario.map((dataMsgRegUsuario,index) => (
                <p>{ dataMsgRegUsuario.message }</p>

                //<div key={"mru" + index} className="alert alert-success" role="alert">
                //    {dataMsgRegUsuario.message}
                //</div>
            ))
        }
    }

    return (
    <div className='container-fluid d-flex flex-column py-5'>
        <form>
            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="text" className="form-control" id="formGroupInputNombre" />
            </div>
            <div className="mb-3">
                <label className="form-label">Apellido:</label>
                <input type="text" className="form-control" id="formGroupInputApellido" />
            </div>  
            <div className="mb-3">
                <label className="form-label">Correo Electrónico:</label>
                <input type="email" className="form-control" id="formGroupInputEmail" />
            </div>  
            <div className="mb-3">
                <label className="form-label">Contraseña:</label>
                <input type="password" className="form-control" id="formGroupInputPassword" />
            </div>  
            <div className="mb-3">
                <label className="form-label">Ciudad:</label>
                <input type="text" className="form-control" id="formGroupInputCiudad" />
            </div>  
            <div className="mb-3">
                <label className="form-label">Comuna:</label>
                <select className="form-select" id="formGroupSelectComuna">
                    {
                        dataComunas &&
                        dataComunas.map((dataComuna,index) => (
                            <option key={index} value={dataComuna.Id_Comuna}>{dataComuna.Nombre_Comuna}</option>
                        ))
                    }
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Fecha Nacimiento:</label>
                <input type="date" className="form-control" id="formGroupInputFechaNac" />
            </div>  
            <button type="button" onClick={() => hClickcrearUsuario(document.getElementById("formGroupInputNombre").value,
                document.getElementById("formGroupInputApellido").value,
                document.getElementById("formGroupInputEmail").value,
                document.getElementById("formGroupInputPassword").value,
                document.getElementById("formGroupInputCiudad").value,
                document.getElementById("formGroupSelectComuna").value,
                document.getElementById("formGroupInputFechaNac").value)} className="btn btn-secondary">Registrarse</button>
        </form>
    </div>
    )
}

export default RegistroUsuario