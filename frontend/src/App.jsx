import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nbmenu from './components/nbmenu';
import Home from './views/home';



function App() {

  return (
    <>
    <Nbmenu />
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    </>
  )
}

export default App
