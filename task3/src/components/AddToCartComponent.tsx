import '../style/cartList.css';
import { useContext, useEffect, useState } from 'react';
import ProductContext from '../context/ProductContex';
import { ProductType } from '../types/dataType';



export default function AddToCartComponent() {

    const product = useContext( ProductContext );
    const [ totalState, setTotalState ] = useState< number >( 0 );

    // console.log( product?.cartList );

    let objCount = product?.cartList.reduce<Record<string, number>>( ( counts, obj ) => {

        let key = JSON.stringify( obj );

        counts[ key ] = ( counts[ key ] || 0 ) + 1;
        // console.log( counts[ key ]);
  
        return counts;

    }, {}) || {};

    let readableCounts = Object.entries( objCount ).map( ([ key, count ]) =>({
        object: JSON.parse( key ),
        count: count
    }) );


    useEffect( () => {
        product?.cartList.map( ( element ) => {
            console.log( element );
            
                setTotalState( ( e ) => { return e + element.price } )
            
        } )
    }, [] );

          
    return(
        <div className="cart-list">
            <h2>Shopping Cart</h2>
            {
                readableCounts.map( ( element ) => {
                    return (
                        <div className='product-cart' key={ element.object.id }>
                            <h2>{ element.object.title }</h2>
                            <img src={ element.object.thumbnail } alt={ element.object.title } />
                            <p>Prpice: { element.object.price }</p>
                            <p>In cart :{ element.count }</p>
                        </div>
                    )
                } )
            } 
            <h2>Total: { totalState }</h2>
        </div>
    )
}