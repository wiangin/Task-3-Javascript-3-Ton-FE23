import './App.css';
import ProviderComponent from './provider/ProviderComponent';
import ProductCartComponent from './components/ProductCartComponent';
import NavComponent from './components/NavComponent';
import { Routes, Route } from "react-router-dom";
import ModalComponent from './components/ModalComponent';
import UserInputComponent from './components/UserInputComponent';
import FooterComponent from './components/FooterComponent';

function App() {

  return (

    <div className='main'>
      
      {/*Search  */}
      <ProviderComponent>
          {/*  Här kommer det ligga min andra komp som är consumer    */}
          <Routes>
            <Route path='/' element={ 
              <>
                <NavComponent/>
                <div className='empty-products'>
                  <UserInputComponent/>
                </div>
                
                <FooterComponent/>
              </> } />
            <Route path='/products' element={ 
              <>  
                <NavComponent/>
                <UserInputComponent/>
                <ProductCartComponent/>
                <FooterComponent/>
              </> } />
            <Route path='/moreInfo/:id' element={ <ModalComponent/> }/>
          </Routes>
      </ProviderComponent>
    </div>
  )
}

export default App
