import '../style/cartList.css';
import { useContext } from 'react';
import ProductContext from '../context/ProductContex';



export default function AddToCartComponent() {

    const product = useContext( ProductContext );



    return(
        <div className="cart-list">
            <h2>Min Add to Cart Page</h2>
            {
                product?.cartList.map( ( element ) => {
                    return (
                        <div className='product-cart'>
                            <h2>{ element.title }</h2>
                            <img src={ element.thumbnail } alt={ element.title } />
                        </div>
                    )
                } )
            } 
        </div>
    )
}