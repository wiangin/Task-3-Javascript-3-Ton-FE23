import { useContext } from "react";
import ProductContext from "../context/ProductContex";
import '../style/productList.css';
import { Link } from "react-router-dom";
import { ProductType } from "../types/dataType";


export default function ProductListComponent() {
    const product = useContext( ProductContext );
    const cartList = useContext( ProductContext );

    console.log( "i min cartList state", cartList?.cartList );
    

    const onBtnClick = ( event: React.MouseEvent<HTMLButtonElement> ) => {

        const target = event.target as HTMLButtonElement;
        const id = target.id;
        // console.log( id );

        const getProduct = () => {
            let element;
            product?.productState.filter( ( item ) => {
                return item.id === Number( id );
            } )
            .map( item => { return element = item } );
            
            return element;
        };
        
        // Add product to cart.
        cartList?.setCartList( ( element: ProductType[] ) => {
            return [ ...element, getProduct() ] as ProductType[];
        } )
      
        
    };

    return(
        <div className="product-container">
            <ul>
                { product?.productState.map( ( element ) => {
                    return ( 
                        <div className="product-cart" key={ element.id }>
                            <li> 
                                <h2>{element.title}</h2>
                                <img src={element.thumbnail}  alt={ element.title } />
                                 <Link to={"/moreInfo/" + element.id }>More Info</Link>
                                 <button onClick={ onBtnClick } id={ element.id.toString() }>Add</button>
                            </li>
                        </div>
                    )
                } ) }
            </ul>
        </div>
    )
};