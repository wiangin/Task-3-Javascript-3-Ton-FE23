import '../style/cartList.css';
import { useContext } from 'react';
import ProductContext from '../context/ProductContex';



export default function AddToCartComponent() {

    const product = useContext( ProductContext );
    console.log( product?.cartList );

    let objCount = product?.cartList.reduce<Record<string, number>>( ( counts, obj ) => {
        
        console.log( counts );
        let key = JSON.stringify( obj );
        console.log(key);
        
        counts[ key ] = ( counts[ key ] || 0 ) + 1;
        console.log( counts[ key ]);
  
        return counts;

    }, {}) || {};

    let readableCounts = Object.entries( objCount ).map( ([ key, count ]) =>({
        object: JSON.parse( key ),
        count: count
    }) )
          
    return(
        <div className="cart-list">
            <h2>Min Add to Cart Page</h2>
            {
                readableCounts.map( ( element ) => {
                    return (
                        <div className='product-cart' key={ element.object.id }>
                            <h2>{ element.object.title }</h2>
                            <img src={ element.object.thumbnail } alt={ element.object.title } />
                            <h2>Counter :{ element.count }</h2>
                        </div>
                    )
                } )
            } 
        </div>
    )
}