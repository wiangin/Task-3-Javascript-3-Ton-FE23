import './App.css';
import ComponentA from './provider/ComponentA';
import ProductComponent from './components/ProductComponent';

function App() {


  return (
    <div className='main'>
        <ComponentA>
            <ProductComponent/>
        </ComponentA>
    </div>
  )
}

export default App
