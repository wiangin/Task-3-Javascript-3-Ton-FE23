import '../style/dropDown.css';
import { useContext } from 'react';
import ProductContext from '../context/ProductContex';


export default function DropDownComponent() {
    const product = useContext( ProductContext )

    const loop = () => {
        let element = [];

             element.push(
                product?.productState.map( ( element ) => {
                    return  <li>{ element.title }</li>
                } )
                ) 
        
        return element;
    }
 

    return (
        <div>
            <ul className="dropdown">
                { loop() }
            </ul>
        </div>
  
    )
}