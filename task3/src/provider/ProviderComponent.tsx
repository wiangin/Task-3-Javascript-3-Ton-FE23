//Ton FE23
//This provider component manages states and functions for fetching data from the API at https://dummyjson.com.


import ProductContext from "../context/ProductContex";
import { ProductType, ProductContexObject, PropsType } from "../types/dataType";
import { useState, useEffect } from "react";
import '../style/providerCompStyle.css';


export default function ProviderComponent( { children }: PropsType ) {

    const [ productState, setProductState ] = useState< ProductType[] >( [] );
    const [ userInputState, setUserInputState ] = useState< string >( "" );
    const [ cartList, setCartList ] = useState< ProductType[] >( [] );
    const [ dropDownState, setDropDownState ] = useState< ProductType[] >( [] );
  
  
    const providerValue: ProductContexObject = {
        productState: productState,
        setProductState: setProductState,
        userInputState: userInputState,
        setUserInputState: setUserInputState,
        cartList: cartList,
        setCartList: setCartList,
        dropDownState: dropDownState,
        setDropDownState: setDropDownState
    }

    useEffect( () => {
        const fetchData = async () => {
            try{
                let response;

                if ( providerValue.userInputState == "" ){
                    response = await fetch( "https://dummyjson.com/products?limit=12" );
                } else{
                    response = await fetch( `https://dummyjson.com/products/search?q=${ providerValue.userInputState }`);
                }
                
                if( !response.ok){
                    throw new Error();
                }
                
                const result: ProductType = await response.json();
    
                if( result.products.length !== 0 ){
                    setProductState( result.products as ProductType[] );
                } else {
                    console.log( "product not found" );
                }
            } catch ( error ) {
                console.error( error );
            }
  
        };

        fetchData();

    }, [ userInputState ] );

    return(
        <ProductContext.Provider value={ providerValue }>
            { children }
        </ProductContext.Provider>
    )
};