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
                    <div className="carousel-item active">
                        <img src="src\assets\imgproducto\cerveza1.jpg" className="d-block imgcarouselitem" alt="..." />
                    </div>
                    <div className="carousel-item">
                         <img src="src\assets\imgproducto\cerveza2.jpg" className="d-block imgcarouselitem" alt="..." />
                    </div>
                    <div className="carousel-item">
                         <img src="src\assets\imgproducto\ron1.jpg" className="d-block imgcarouselitem" alt="..." />
                    </div>
                    <div className="carousel-item">
                         <img src="src\assets\imgproducto\ron2.jpg" className="d-block imgcarouselitem" alt="..." />
                    </div>
                    <div className="carousel-item">
                         <img src="src\assets\imgproducto\vinocd1.jpg" className="d-block imgcarouselitem" alt="..." />
                    </div>
                    <div className="carousel-item">
                         <img src="src\assets\imgproducto\vinotarapaca.jpg" className="d-block imgcarouselitem" alt="..." />
                    </div>
                    <div className="carousel-item">
                         <img src="src\assets\imgproducto\whisky.jpg" className="d-block imgcarouselitem" alt="..." />
                    </div>
                    <div className="carousel-item">
                         <img src="src\assets\imgproducto\whisky1.jpg" className="d-block imgcarouselitem" alt="..." />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Banner