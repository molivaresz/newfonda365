import React from 'react'
import RegistroUsuario from '../components/RegistroUsuario'
import InicioSesion from '../components/InicioSesion'


const InicioRegistro = () => {
  return (
    <>
    <div className='row row-cols-1 row-cols-lg-2 container-fluid d-flex justify-content-evenly bg-secondary bg-opacity-10'>
        <InicioSesion />
        <RegistroUsuario />
    </div>
    </>
  )
}

export default InicioRegistro