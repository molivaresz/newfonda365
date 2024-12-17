import React from 'react'
import { useContext } from 'react';
import { Fonda365Context } from '../context/Fonda365ContextProvider';
import { useNavigate } from 'react-router';

const InicioSesion = () => {

    const {iniciarUsuario,dataSesion} = useContext(Fonda365Context)

    const navigate = useNavigate()

    const hClickinisession = (correo,password) => {
        iniciarUsuario(correo,password)
        dataSesion ? navigate("/") : null
    }

    return (
        <div className='col container-fluid d-flex pt-5 ps-5'>
            <form>
                <div className="mb-3">
                    <label className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="InputPassword" />
                </div>
                <button type="button" onClick={() => hClickinisession(document.getElementById("InputEmail").value,
                document.getElementById("InputPassword").value)} className="btn btn-secondary">Ingresar</button>
            </form>
        </div>
    )
}

export default InicioSesion