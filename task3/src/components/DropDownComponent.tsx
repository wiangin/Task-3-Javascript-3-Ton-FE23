import '../style/dropDown.css';
import { useContext } from 'react';
import ProductContext from '../context/ProductContex';
import { ProductType } from '../types/dataType';


export default function DropDownComponent() {
    const product = useContext( ProductContext );
    const cartList = useContext( ProductContext );

    const onBtnClick = ( event: React.MouseEvent<HTMLButtonElement> ) => {

        const target = event.target as HTMLButtonElement;
        const value = target.value;
        
        const getProduct = () => {
            let element;
            product?.productState.filter( ( item ) => {
                return item.id === Number( value );
            } )
            .map( item => { return element = item } );
        
            return element;
        };

        // Add product to cart.
        cartList?.setCartList( ( element: ProductType[] ) => {
            return [ ...element, getProduct() ] as ProductType[];
        } );
    };

    
    return (
        <div>
            <ul className="dropdown">
              {
                cartList?.productState.sort( (a, b) => b.rating - a.rating)
                .map( ( element ) => {
                    return (
                        
                        <div key={ element.id } className='dropdown-list'>
                             <li>
                                <div>
                                    <p>{ element.title }</p>
                                    <p>{ element.price }</p>
                                    <p> Rating: { element.rating }</p>
                                </div>
                               <div>
                                    <button onClick={ onBtnClick } value={ element.id.toString() }>Add</button>
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