import '../style/dropDown.css';
import { useContext } from 'react';
import ProductContext from '../context/ProductContex';


export default function DropDownComponent() {
    const product = useContext( ProductContext )

    
    return (
        <div>
            <ul className="dropdown">
              {
                product?.dropDownState.map( ( element ) => {
                    return (
                        <div key={ element.id } className='dropdown-list'>
                             <li>
                                <div>
                                    <p>{ element.title }</p>
                                    <p>{ element.price }</p>
                                </div>
                               <div>
                                    <button>Add</button>
                               </div>
                            </li>
                        </div>
                           
                    )
                } )
              }
            </ul>
        </div>
  
    )
}