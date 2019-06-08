import React, {useState, createContext, useContext} from 'react'

const ProductContext = createContext();
//Provider
//Consumer

export const ProductProvider = ({children}) => {

    return (
        <ProductContext.Provider value="hello from phone app">
            {children}
        </ProductContext.Provider>
    )
}

export const ProductConsumer = () => useContext(ProductContext);
