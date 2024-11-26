import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nbmenu from './components/nbmenu';
import Home from './views/home';
import Footer from './components/Footer';
import Contacto from './views/Contacto';
import InfoDespacho from './views/InfoDespacho';
import PreguntasFrecuentes from './views/PreguntasFrecuentes';


function App() {

  return (
    <>
    <Nbmenu />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contacto" element={<Contacto />}/>
      <Route path="/informacionDespacho" element={<InfoDespacho />}/>
      <Route path="/preguntasFrecuentes" element={<PreguntasFrecuentes />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
