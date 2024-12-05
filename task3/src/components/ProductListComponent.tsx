//Ton FE23
// Renders a list of products matching the user's search query.
// Updates the cart list state with selected products.


import { useContext, useEffect, useState} from "react";
import ProductContext from "../context/ProductContex";
import '../style/productList.css';
import { Link } from "react-router-dom";
import { ProductType } from "../types/dataType";


export default function ProductListComponent() {
    const product = useContext( ProductContext );
    const cartList = useContext( ProductContext );

    // Display add to card messege.
    const [ isVisible, setVisible ] = useState( false );

    // make add to massege disappear
    useEffect( () => {
        const timer = setTimeout( () => {
            setVisible( false );
        }, 1000);

        return () => clearInterval( timer )
    }, [ isVisible ] );
    

    const onBtnClick = ( event: React.MouseEvent<HTMLButtonElement> ) => {

        const target = event.target as HTMLButtonElement;
        const value = target.value;
        
        setVisible( true );
    
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
            {
               isVisible && <div className="Add-message">
                <div className="Add-message-content">
                    <p>Product Add!</p>
                </div>
                
            </div>
            }
            <ul>
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
                                        <p> Price { element.price } $</p>
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
        </div>
    )
};