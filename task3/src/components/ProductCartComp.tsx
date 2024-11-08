import { useContext } from "react";
import ProductContext from "../context/ProductContex";
import '../style/productCart.css';
import { Link } from "react-router-dom";


export default function ProductCartComp() {
    const product = useContext( ProductContext );

    return(
        <div>
            <ul>
                { product?.productState.map( ( element ) => {
                    return ( 
                        <div className="product-cart" key={ element.id }>
                            <li> 
                                <h2>{element.title}</h2>
                                <img src={element.thumbnail}  alt={ element.title } />
                                 <Link to={"/moreInfo/" + element.id }>More Info</Link>
                            </li>
                        </div>
                    )
                } ) }
            </ul>
        </div>
    
    )
};