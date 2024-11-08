import { ModalProps } from "../types/dataType";
import '../style/modalStyel.css';
import { useContext } from "react";
import ProductContext from "../context/ProductContex";

export default function ModalComponent( props: ModalProps ) {
    // const [ openState, setOpenState ] = useState< boolean >( false );
    console.log( props.onId );
    
    if( !props.show ) return null;
    const product = useContext( ProductContext );
    // console.log( product?.productState );

    const findProduct = product?.productState.find( (element) => element.id === props.onId );
    
    console.log(findProduct);
    
    return(
        <div className="modal-overlay" onClick={ props.onClose }>
            <div className="modal-content">
           
                <button className="close-button" onClick={ props.onClose }>Close</button>
            </div>
            
        </div>
    )
}