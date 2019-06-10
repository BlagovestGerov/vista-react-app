import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';

export default function Cart() {
    return (
        <section>
            <ProductConsumer>
                    {value=>{
                        const {cart} = value;
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                <Title name="your" title="cart" />
                                <CartColumns />
                                <CartList value={value}/>
                                </React.Fragment>
                            )
                        }else{
                           return  <EmptyCart />;
                        }
                    }

                }
            </ProductConsumer>
        </section>
    )
}
