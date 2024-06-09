import logo from './logo.svg';
import './App.css';
import AddProduct from './component/AddProduct';
import SearchProduct from './component/SearchProduct';
import DeleteProduct from './component/DeleteProduct';
import ViewProduct from './component/ViewProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<AddProduct/>}/>
      <Route path='/search'element={<SearchProduct/>}/>
      <Route path='/delete'element={<DeleteProduct/>}/>
      <Route path='/viewAll'element={<ViewProduct/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
