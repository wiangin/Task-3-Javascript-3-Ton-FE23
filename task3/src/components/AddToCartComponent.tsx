import '../style/cartList.css';
import { useContext, useEffect, useState } from 'react';
import ProductContext from '../context/ProductContex';
import { ProductType } from '../types/dataType';



export default function AddToCartComponent() {

    const product = useContext( ProductContext );
    const [ totalState, setTotalState ] = useState< number >( 0 );
    

    let orginalProductObj = product?.cartList.reduce<Record<string, number>>( ( counts, obj ) => {

        let key = JSON.stringify( obj );

        counts[ key ] = ( counts[ key ] || 0 ) + 1;
        // console.log( counts[ key ]);
  
        return counts;

    }, {}) || {};

    let newProductObj = Object.entries( orginalProductObj ).map( ([ key, count ]) =>({
        object: JSON.parse( key ) as ProductType,
        count: count    
    }) );

    useEffect( () => {
        product?.cartList.map( ( element ) => {

            setTotalState( ( e ) => { return e + element.price } )
    
        } )
    }, [ product?.cartList ] );

    const onClickDelete = ( event:React.MouseEvent<HTMLButtonElement> ) => {
        
        const target = event.target as HTMLButtonElement;
        const btnValue = target.value;
    
        product?.setCartList( product.cartList.filter( ( e )  => { return (e.id !== Number( btnValue )) } ) ); 
        setTotalState( 0 )     
    }
 
    return(
        <div className="inCart-container">
            <h2>Shopping Cart</h2>
            <div className='inCart-list'>

                <ul>
                {
                    newProductObj.map( ( element ) => {
                        return (
                            <div className='product-inCart' key={ element.object.id }>
                                <li>
                                    <div>
                                        <h3>{ element.object.title }</h3>
                                    </div>

                                    <div className="img-and-price-incart">
                                        <img src={ element.object.thumbnail } alt={ element.object.title } />
                                        <div>
                                            <p>Price: { element.object.price }</p>
                                            <p>In cart : { element.count }</p>
                                            <button className='delete-btn' value={ element.object.id } onClick={ onClickDelete }>Delete</button>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        )
                    } )
                    }
                </ul>
            </div>
            
           
            <h2>Total: { totalState }</h2>
        </div>
    )
}