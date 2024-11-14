import { useState } from "react";
import { useContext } from "react";
import ProductContext from "../context/ProductContex";
import { useNavigate } from "react-router-dom";
import '../style/inputStyle.css';
// import DropDownComponent from "./DropDownComponent";

export default function UserInputComponent() {
    const [ inputState, setInputState ] = useState< string >( "" );
    // const [ dropDown, setDropDown ] = useState< boolean >( false );

    const product = useContext( ProductContext );
    const navigate = useNavigate();
    // console.log(product?.setTextState);
    
    const onBtnClick = () => {
      
        product?.setTextState( inputState );
        setInputState( "" );
        navigate( "/products" );
        
    };

    const onChangeInput = ( e: { target: { value: string } } ) => {
      
        
        // if( inputState.length >= 2 ) {
        //     setDropDown( true )
        // } else {
        //     setDropDown( false )
        // }
        setInputState( e.target.value )
        
    }
    return(
        <div className="search-style">
                {/* <input type="text" onChange={ ( e ) => setInputState( e.target.value ) } value={ inputState } /> */}
                <input type="text" onChange={ onChangeInput } value={ inputState } placeholder="Search..."/>
                <button onClick={ onBtnClick }>Search</button>
                {/* {
                    dropDown && <DropDownComponent></DropDownComponent>
                } */}
            </div>
    )
};

