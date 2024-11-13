import { useContext } from "react";
import ProductContext from "../context/ProductContex";
import '../style/productList.css';
import { Link } from "react-router-dom";
import { ProductType } from "../types/dataType";


export default function ProductListComponent() {
    const product = useContext( ProductContext );
    const cartList = useContext( ProductContext );

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
            <ul>
                { 
                    product?.productState.map( ( element ) => {
                    return ( 
                        <div className="product-cart" key={ element.id }>
                            <li> 
                                <h2>{element.title}</h2>
                                <img src={element.thumbnail}  alt={ element.title } />
                                <p> Price : { element.price }</p>
                                <Link to={"/moreInfo/" + element.id }>More Info</Link>
                                <button onClick={ onBtnClick } value={ element.id.toString() }>Add</button>
                            </li>
                        </div>
                        )
                    } ) 
                }
            </ul>
        </div>
    )
};