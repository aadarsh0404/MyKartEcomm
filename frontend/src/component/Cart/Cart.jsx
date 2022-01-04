import React, { Fragment } from 'react';
import './Cart.css';
import CartItemCard from './CartItemCard.jsx';
import { useDispatch, useSelector } from 'react-redux'
import { addItemsToCart, removeItemFromCart } from '../../actions/cartAction';
import { Typography } from '@material-ui/core';
import { RemoveShoppingCart as RemoveShoppingCartIcon } from "@material-ui/icons";
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);

    const increaseQuantity = (id, quantity, stock) => {
        if (stock <= quantity)
            return;
        const newQty = quantity + 1;
        dispatch(addItemsToCart(id, newQty));
    }

    const decreaseQuantity = (id, quantity) => {
        const newQty = quantity - 1;
        if (quantity <= 1)
            return;
        dispatch(addItemsToCart(id, newQty));
    }

    const deleteCartItems = (id) => {
        dispatch(removeItemFromCart(id));
    }

    const checkoutHandler = () =>{
        navigate("/login?redirect=shipping");
    }
    return (
        <Fragment>
            {cartItems.length === 0 ?
                <div className='emptyCart'>
                    <RemoveShoppingCartIcon />
                    <Typography>No product in your cart</Typography>
                    <Link to='/products'>View Products</Link>
                </div>
                :
                <Fragment>
                    <div className='cartPage'>
                        <div className='cartHeader'>
                            <p>Product</p>
                            <p>Quantity</p>
                            <p>Subtotal</p>
                        </div>

                        {cartItems && cartItems.map((item) => (
                            <div className='cartContainer' key={item.product}>
                                <CartItemCard item={item} deleteCartItems={deleteCartItems} />
                                <div className='cartInput'>
                                    <button onClick={() => decreaseQuantity(item.product, item.quantity)}>-</button>
                                    <input readOnly value={item.quantity} />
                                    <button onClick={() => increaseQuantity(item.product, item.quantity, item.stock)} >+</button>
                                </div>
                                <p className='cartSubtotal'>₹ {item.price * item.quantity}</p>
                            </div>
                        ))}

                        <div className="cartGrossProfit">
                            <div></div>
                            <div className="cartGrossProfitBox">
                                <p>Gross Total</p>
                                <p>{`₹${cartItems.reduce((acc, item)=>acc+item.quantity*item.price,0)}`}</p>
                            </div>
                            <div></div>
                            <div className="checkOutBtn">
                                <button onClick={checkoutHandler}>Check Out</button>
                            </div>
                        </div>
                    </div>
                </Fragment >}
        </Fragment>
    )
}

export default Cart;
