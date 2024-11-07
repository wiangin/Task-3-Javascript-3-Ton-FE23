import ProductContext from "../context/ProductContex";
import { ProductType, ProductContexObject, PropsType } from "../types/dataType";
import { useState,useEffect } from "react";

export default function ComponentA( { children }: PropsType ) {

    const [ productState, setProductState ] = useState< ProductType[] >( [] )
    const [ inputState, setInputState ] = useState< string >( "" );
    const [ textState, setTextState ] = useState< string >( "" );
 
    const providerValue: ProductContexObject = {
        productState: productState,
        setProductState: setProductState
    }

    useEffect( () => {
        const fetchData = async () => {
            let response;

            if ( textState == "" ){
                return response = await fetch( "" );
            } else{
                response = await fetch( `https://dummyjson.com/products/search?q=${ textState }`);
            }
            
            const result: ProductType = await response.json();

            // console.log( result.products as ProductType[]);
            setProductState( result.products as ProductType[] )
            
        };

        fetchData();

    }, [ textState ] );

    const onBtnClick = () => {
      
        setTextState( inputState );
        setInputState( "" );

    }
    return(
        <ProductContext.Provider value={ providerValue }>
            <div>
                <input type="text" value={ inputState } onChange={ ( e ) => setInputState( e.target.value ) } />
                <button onClick={ onBtnClick }>Search</button>
            </div>
            { children }
        </ProductContext.Provider>
    )
};