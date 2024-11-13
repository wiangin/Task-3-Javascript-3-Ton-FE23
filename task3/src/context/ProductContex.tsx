import { createContext } from "react";
import { ProductContexObject } from "../types/dataType";

const ProductContext = createContext< ProductContexObject | undefined >( undefined );

export default ProductContext;