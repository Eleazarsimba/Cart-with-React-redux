import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import{ FaTimes } from 'react-icons/fa'

import { removeItem } from '../features/CartSlice';

const Cart = () => {
    var TotalSale = 0;
    const cartList = useSelector((state) => state.cart.value)

    const dispatch = useDispatch();

    // function TotalPrice(price,quantity){
    //     return Number(price *quantity);
    // }
  return (
    <div className='cartInfo'>
        <h3>SHOPPING CART</h3>
        <table className='cartTable'>
            <thead>
                <tr>
                    <th>Phone Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Cost</th>
                    <th>Remove</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody>
                {cartList.map((cart) => {
                    TotalSale += cart.Price * cart.Quantity;
                    return(
                        <tr key={cart.id} className="cartTable">
                            <td>{cart.ItemName}</td>
                            <td><img src={`assets/${cart.ItemName}.jpg`} alt='' width='100px' height='100px' /></td>
                            <td>
                                {
                                cart.Quantity == 1 ? 
                                <button type="button" disabled>-</button> :
                                <button type="button" className='decrease'>-</button>
                                }
                                <span>{cart.Quantity}</span>
                                <button type="button" className='increase'>+</button>
                            </td>
                            <td>KSh. {cart.Price}</td>
                            <td><button type="button" className='deleteBtn'
                            onClick={() => {
                                dispatch(removeItem({
                                id: cart.id
                                }))
                            }}><FaTimes /></button></td>
                            <td>KSh. {cart.Price * cart.Quantity}</td>
                        </tr>
                    )
                })}
                     <tr>   
                        <td colSpan="5">Total Sale</td>
                        <td>KSh. {TotalSale}</td>
                     </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Cart