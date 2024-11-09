import { useState } from "react";
import { useContext } from "react";
import ProductContext from "../context/ProductContex";
import { useNavigate } from "react-router-dom";

export default function UserInputComponent() {
    const [ inputState, setInputState ] = useState< string >( "" );
    // const [ textState, setTextState ] = useState< string >( "" );

    const product = useContext( ProductContext );
    const navigate = useNavigate();
    // console.log(product?.setTextState);
    
    const onBtnClick = () => {
      
        product?.setTextState( inputState );
        setInputState( "" );
        navigate( "/products" );
        
    };
    return(
        <div className="search-style">
                <input type="text" onChange={ ( e ) => setInputState( e.target.value ) } value={ inputState } />
                <button onClick={ onBtnClick }>Search</button>
            </div>
    )
};

