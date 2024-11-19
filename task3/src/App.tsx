// Ton FE23
// This component is responsible for rendering all the components of the entire application.


import './App.css';
import ProviderComponent from './provider/ProviderComponent';
import ProductListComponent from './components/ProductListComponent';
import NavComponent from './components/NavComponent';
import { Routes, Route } from "react-router-dom";
import ModalComponent from './components/ModalComponent';
import UserInputComponent from './components/UserInputComponent';
import FooterComponent from './components/FooterComponent';
import ShoppingCartComponent from './components/ShoppingCartComponent';

function App() {

  return (

    <div className='main'>
      <ProviderComponent>
          {/*  Här kommer det ligga min andra komp som är consumer    */}
          <Routes>
            
            <Route path='/' element={
              <>
                <NavComponent/>
                {/* <HomePageComponent/> */}
                <ProductListComponent/>
                <FooterComponent/>
              </> } />
            <Route path='/products' element={ 
                <>  
                  <NavComponent/>
                  <UserInputComponent/>
                  <ProductListComponent/>
                  <FooterComponent/>
                </> } />
            <Route path='/moreInfo/:id' element={ <ModalComponent/> }/>
            <Route path='/cartList' element={ 
                <>
                  <NavComponent/>
                  <ShoppingCartComponent/>
                  <FooterComponent/>
                </>}>
              </Route>
          </Routes>
      </ProviderComponent>
    </div>
  )
}

export default App
