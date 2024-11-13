import '../style/cartList.css';
import { useContext, useEffect, useState } from 'react';
import ProductContext from '../context/ProductContex';



export default function AddToCartComponent() {

    const product = useContext( ProductContext );
    const [ totalState, setTotalState ] = useState< number >( 0 );

    // console.log( product?.cartList );

    let orginalProductObj = product?.cartList.reduce<Record<string, number>>( ( counts, obj ) => {

        let key = JSON.stringify( obj );

        counts[ key ] = ( counts[ key ] || 0 ) + 1;
        // console.log( counts[ key ]);
  
        return counts;

    }, {}) || {};

    let newProductObj = Object.entries( orginalProductObj ).map( ([ key, count ]) =>({
        object: JSON.parse( key ),
        count: count
    }) );

    console.log( newProductObj );
    

    useEffect( () => {
        product?.cartList.map( ( element ) => {
                setTotalState( ( e ) => { return e + element.price } )
        } )
    }, [] );

    const onClickDelete = ( event:React.MouseEvent<HTMLButtonElement> ) => {
        
        const target = event.target as HTMLButtonElement;
        const btnValue = target.value;
        // console.log( "jag har klickat delete", btnValue );
        newProductObj.map( ( element ) => {
            // console.log( element );
            
            if( element.object.id === Number( btnValue ) ) {
                console.log( element.object.id );
                // uppdatera addToCart state ??
            }
        } )
        
    }
          
    return(
        <div className="cart-list">
            <h2>Shopping Cart</h2>
            {
                newProductObj.map( ( element ) => {
                    return (
                        <div className='product-cart' key={ element.object.id }>
                            
                            <h2>{ element.object.title }</h2>
                            <img src={ element.object.thumbnail } alt={ element.object.title } />
                            <p>Price: { element.object.price }</p>
                            <p>In cart : { element.count }</p>
                            <button value={ element.object.id } onClick={ onClickDelete }>Delete</button>
                        </div>
                    )
                } )
            } 
            <h2>Total: { totalState }</h2>
        </div>
    )
}