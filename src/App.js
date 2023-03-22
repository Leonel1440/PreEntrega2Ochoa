import { Navbar } from './components/Navbar/Navbar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeApi from './ejemplos/PokeApi/PokeApi';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros';
import { Nav } from 'react-bootstrap';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {


  return (
    <BrowserRouter>
        
        <Navbar />


        <Routes>
          <Route path='/' element={ <ItemListContainer /> }/>
          <Route path='/productos/:categoryId' element={ <ItemListContainer /> }/>
          <Route path='/detail/:itemId' element={ <ItemDetailContainer /> } />
          <Route path='/nosotros' element={ <Nosotros /> }/>
          {/* <Route path='/pokeapi' element={ <PokeLista /> }/> */}
          <Route path='*' element={ <Navigate to={"/"}/> }/>
        </Routes>


    </BrowserRouter>

  );
}

export default App;



















































