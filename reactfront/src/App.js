import './customcss/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importar nuestros componentes
import ShowProducts from './components/ShowProducts';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowProducts/> } />
          <Route path='/create' element={ <CreateProduct/> } />
          <Route path='/edit/:id' element={ <EditProduct/> } />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
