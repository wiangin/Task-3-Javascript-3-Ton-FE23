import './App.css';
import SearchComp from './provider/SearchComp';
import ProductCartComp from './components/ProductCartComp';
import NavComponent from './components/NavComponent';


function App() {

  return (
    
    <div className='main'>


        <NavComponent></NavComponent>
        <SearchComp>
            <ProductCartComp/>
        </SearchComp>
    </div>
  )
}

export default App
