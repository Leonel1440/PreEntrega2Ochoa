import { Navbar } from './components/Navbar/Navbar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeApi from './ejemplos/PokeApi/PokeApi';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros';
import { Nav } from 'react-bootstrap';

function App() {


  return (
    <BrowserRouter>
        
        <Navbar />


        <Routes>
          <Route path='/' element={ <ItemListContainer/>}/>
          <Route path='/productos/:categoryId' element={ <ItemListContainer/>}/>
          <Route path='/nosotros/' element={ <Nosotros/>}/>
          <Route path='/pokeapi' element={ <PokeApi/>}/>
          {/* <Route path='*' element={ <Navigate to={"/"}/>}/> */}
        </Routes>

    </BrowserRouter>

  );
}

export default App;



















































