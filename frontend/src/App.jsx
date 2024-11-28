import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Nbmenu from './components/nbmenu';
import Home from './views/home';
import Footer from './components/Footer';
import Contacto from './views/Contacto';
import InfoDespacho from './views/InfoDespacho';
import PreguntasFrecuentes from './views/PreguntasFrecuentes';
import QuienesSomos from './views/QuienesSomos';
import TerminosCondiciones from './views/TerminosCondiciones'
import InicioRegistro from './views/InicioRegistro';
import DetalleProducto from './views/DetalleProducto';
import ProductoCategoria from './views/ProductoCategoria';


function App() {

  return (
    <>
    <Nbmenu />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/InicioRegistro" element={<InicioRegistro />}/>
      <Route path="/DetalleProducto/:idproducto" element={<DetalleProducto />}/>1
      <Route path="/contacto" element={<Contacto />}/>
      <Route path="/informacionDespacho" element={<InfoDespacho />}/>
      <Route path="/preguntasFrecuentes" element={<PreguntasFrecuentes />}/>
      <Route path="/quienesSomos" element={<QuienesSomos />}/>
      <Route path="/terminosCondiciones" element={<TerminosCondiciones />}/>
      <Route path="/ProductoCategoria/:idcategoria" element={<ProductoCategoria />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
