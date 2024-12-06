import React from 'react'
import { useContext } from 'react';
import { Fonda365Context } from '../context/Fonda365ContextProvider';

const Banner = () => {

    const {dataProducto} = useContext(Fonda365Context)

    return (
        <>
        <div className="container-fluid d-flex justify-content-center">
            <div id="carouselSlidesOnly" className="carousel slide pt-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                {    
                    dataProducto &&
                    dataProducto.map((dataProd,index) => (
                        index == 0 ? (
                            <div key={index} className="carousel-item active">
                                <img key={index} src={dataProd.Imagen} className="d-block imgcarouselitem" alt="..." />
                            </div>
                        )
                        :   <div key={index} className="carousel-item">
                                <img key={index} src={dataProd.Imagen} className="d-block imgcarouselitem" alt="..." />
                            </div>
                    ))
                }
                </div>
            </div>
        </div>
        </>
    )
}

export default Banner