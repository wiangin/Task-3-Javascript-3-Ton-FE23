import './App.css';
import SearchComp from './provider/SearchComp';
import ProductCartComp from './components/ProductCartComp';
import NavComponent from './components/NavComponent';
import { Routes, Route } from "react-router-dom";
import ModalComponent from './components/ModalComponent';

function App() {

  return (
    
    <div className='main'>

      <NavComponent></NavComponent>
      <SearchComp>
          <Routes>  
              <Route path="/moreInfo/:id" element={ <ModalComponent></ModalComponent> }></Route>
          </Routes>
          <ProductCartComp/>
      </SearchComp>
    </div>
  )
}

export default App
