import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nbmenu from './components/nbmenu';
import Home from './views/home';
import Footer from './components/Footer';
import Contacto from './views/Contacto';
import InfoDespacho from './views/InfoDespacho';
import PreguntasFrecuentes from './views/PreguntasFrecuentes';
import QuienesSomos from './views/QuienesSomos';
import TerminosCondiciones from './views/TerminosCondiciones'


function App() {

  return (
    <>
    <Nbmenu />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contacto" element={<Contacto />}/>
      <Route path="/informacionDespacho" element={<InfoDespacho />}/>
      <Route path="/preguntasFrecuentes" element={<PreguntasFrecuentes />}/>
      <Route path="/quienesSomos" element={<QuienesSomos />}/>
      <Route path="/terminosCondiciones" element={<TerminosCondiciones />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
