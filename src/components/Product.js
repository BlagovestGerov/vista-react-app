import React, {useState} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsimer} from '../context';

export default function Product(props) {
    console.log(props)
   const {id, title, img, price, inCard} = props.product;
    return (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
                <div className="img-container p-5" onClick={()=> console.log('you clicked me on the image container')}>
                    <Link to="/details" >
                    <img src={img} alt="product" className="card-img-top"/>
                    </Link>
                </div>
            </div>
        </ProductWrapper>
    )
}

const ProductWrapper = styled.div`

`