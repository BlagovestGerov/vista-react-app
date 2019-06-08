import React, { useState } from 'react'
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data';
import { ProductConsumer } from '../context';

export default function ProductList() {

    const [products, setProducts ] = useState(storeProducts);
    
    console.log(products);
    return (
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <Title name="our" title="products"/>
                    <div className="row">
                        <ProductConsumer>
                            {value=>{
                                return <h1>{value}</h1>
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </div>
        </React.Fragment>
        // <Product/>


    )
}
