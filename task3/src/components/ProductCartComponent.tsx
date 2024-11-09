import { useContext } from "react";
import ProductContext from "../context/ProductContex";
import '../style/productCart.css';
import { Link } from "react-router-dom";


export default function ProductCartComponent() {
    const product = useContext( ProductContext );

    const onBtnClick = ( event: React.MouseEvent<HTMLButtonElement> ) => {

        const target = event.target as HTMLButtonElement;
        const id = target.id;
        console.log( id );
        const getProduct = () => {
            let element;
            product?.productState.filter( ( item ) => {
                return item.id === Number( id );
            } )
            .map( item => { return element = item } );
            
            return element;
        };
        
        console.log( getProduct() );
        
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