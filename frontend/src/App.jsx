import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nbmenu from './components/nbmenu';
import Home from './views/home';
import Footer from './components/Footer';


function App() {

  return (
    <>
    <Nbmenu />
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
