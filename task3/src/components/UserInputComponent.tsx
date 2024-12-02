// Ton FE23.
//Contains an input field and updates the textState.


import { useState } from "react";
import { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContex";
import { useNavigate } from "react-router-dom";
import '../style/inputStyle.css';
import { ProductType } from "../types/dataType";
import DropDownComponent from "./DropDownComponent";


export default function UserInputComponent() {
    const [ onChangeState, setOnChangeState ] = useState< string >( "" );
    const [ showState, setShowState ] = useState( false );
    const product = useContext( ProductContext );
   // const [ saveText, setSaveText ] = useState< string >( "" );
    const navigate = useNavigate();

   
    const onBtnClick = () => {
        
        product?.setUserInputState( onChangeState );
       
        setShowState( false );
        navigate( "/products" );
        // setOnChangeState( "" );
 
    };

    const onChangeInput = ( e: { target: { value: string } } ) => {
        setOnChangeState( e.target.value );
    }


    // This function is for drop down meny
    useEffect( () => {
        
        
            const fetchData = async () => {
                let response;
                let result;

                if( onChangeState.length >= 3 ) {
                    setShowState( true );
                    response = await fetch( `https://dummyjson.com/products/search?q=${ onChangeState }&limit=3` );
                    result = await response.json();

                    if( result.products.length !== 0 ) {
                        product?.setProductState( result.products as ProductType[] );
                    } else {                    
                        setShowState( false );
                    }    
                } else if( onChangeState === "" ) {
                    product?.setUserInputState( "" );
                    setShowState( false );
                    response = await fetch( "https://dummyjson.com/products?limit=12" );
                    result = await response.json();
                    product?.setProductState( result.products as ProductType[] );
                }
            }
          
            fetchData();
        
    }, [ onChangeState ] )


    return(
        <div className="search-style">
                <input type="text" onChange={ onChangeInput } value={ onChangeState } placeholder="Search..."/>
                <button onClick={ onBtnClick }>Search</button>
                {
                    showState && <DropDownComponent></DropDownComponent>
                }
        </div>
    )
};

