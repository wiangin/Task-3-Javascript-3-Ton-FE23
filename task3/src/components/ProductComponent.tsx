import { useContext } from "react";
import ProductContext from "../context/ProductContex";
import '../style/productCart.css';


export default function ProductComponent() {
    const product = useContext( ProductContext )

    return(
        <div>
            <ul>
                { product?.productState.map( ( element ) => {
                    return ( 
                        <div className="product-cart" key={ element.id }>
                            <li> 
                                <h2>{element.title}</h2>
                                <img src={element.thumbnail}  alt="" />
                                
                            </li>
                            <button>Enter</button>
                        </div>
                        
                    )
                } ) }
            </ul>
        </div>
    
    )
}