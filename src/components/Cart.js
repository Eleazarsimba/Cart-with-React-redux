import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import{ FaTimes } from 'react-icons/fa'
import Pay from './Pay';

import { 
    removeItem, 
    incrementQuantity, 
    decrementQuantity 
} from '../features/CartSlice';

const Cart = () => {
    var TotalSale = 0;
    
    const cartList = useSelector((state) => state.cart.value)

    const dispatch = useDispatch();

  return (
    <div className='cartInfo'>
        <h3>SHOPPING CART</h3>
        <table className='cartTable'>
            <thead>
                <tr>
                    <th>Phone Name</th>
                    <th id='cartImg'>Image</th>
                    <th>Quantity</th>
                    <th>Cost</th>
                    <th id='cartRem'>Remove</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody>
                {cartList.map((cart) => {
                    //get total sell of all products
                    TotalSale += cart.Price * cart.cartQuantity;
                    return(
                        <tr key={cart.id} className="cartTable">
                            <td>{cart.ItemName}</td>
                            <td id='cartImg'><img src={`assets/${cart.ItemName}.jpg`} alt='' width='80px' height='80px' /></td>
                            <td>
                                {
                                cart.cartQuantity === 1 ? 
                                <button type="button" className='disableddecrease' disabled>-</button> :
                                <button type="button" className='decrease'
                                    onClick={() => dispatch(decrementQuantity({id: cart.id}))}
                                >-</button>
                                }
                                <span>{cart.cartQuantity}</span>
                                <button type="button" className='increase'
                                    onClick={() => dispatch(incrementQuantity({id: cart.id}))}
                                >+</button>
                            </td>
                            <td>KSh. {cart.Price}</td>
                            {/* delete each product */}
                            <td><button type="button" className='deleteBtn'
                            onClick={() => {
                                dispatch(removeItem({
                                    id: cart.id
                                }))
                            }}><FaTimes /></button></td>
                            <td>KSh. {cart.Price * cart.cartQuantity}</td>
                        </tr>
                    )
                })}
                     <tr>   
                        <td colSpan="4">Total Sale</td>
                        <td colSpan="4"><b>KSh. {TotalSale}</b></td>
                     </tr>
            </tbody>
        </table>
        {TotalSale === 0 ? "":
            <div className='checkOut' 
                >PAY KSh. {TotalSale} WITH MPESA
                <Pay amount1 = {TotalSale} />
            </div>
        }
    </div>
  )
}

export default Cart