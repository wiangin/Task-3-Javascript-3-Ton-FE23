import { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductContex";
import '../style/productList.css';
import { Link } from "react-router-dom";
import { ProductType } from "../types/dataType";
import HomePageComponent from "./HomePageComponent";


export default function ProductListComponent() {
    const product = useContext( ProductContext );
    const cartList = useContext( ProductContext );
    
    const [ showState, setShowState ] = useState( false );

    useEffect( () => {
        console.log( product?.textState.length );
        if( product?.textState !== "" ){
            setShowState( true )
        } else {
            console.log( "ja, det är tumt");
        }

    }, [ product?.textState ] );


    

    const onBtnClick = ( event: React.MouseEvent<HTMLButtonElement> ) => {

        const target = event.target as HTMLButtonElement;
        const value = target.value;
        // console.log( id );
        
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

    return(
        <div className="product-container">
            <h2>Product List</h2>

           { !showState ? <HomePageComponent/> : <ul>
                { 
                    product?.productState.map( ( element ) => {
                    return ( 
                        <div className="product-cart" key={ element.id }>
                            <li> 
                                <div>
                                    <h3>{element.title}</h3>
                                </div>
                                
                                <div className="img-and-price">
                                    <img src={element.thumbnail}  alt={ element.title } />
                                    <div>   
                                        <p> Price : { element.price }</p>
                                        <Link to={"/moreInfo/" + element.id }>More Info</Link>
                                    </div>
                                
                                </div>
                    
                                <div className="add-btn">
                                    <button onClick={ onBtnClick } value={ element.id.toString() }>Add</button>
                                </div>
                               
                            </li>
                        </div>
                        )
                    } ) 
                }
            </ul>
           
           
           
           
           }
            
        </div>
    )
};