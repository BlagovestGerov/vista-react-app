import React, { useState } from 'react'
import Product from './Product';
import Title from './Title';

export default function ProductList() {

    const [products, setProducts ] = useState([]);
    
    return (
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <Title name="our" title="products"/>
                    <div className="row"/>
                </div>
            </div>
        </React.Fragment>
        // <Product/>


    )
}
