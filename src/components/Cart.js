import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { removeItem } from '../features/CartSlice';

const Cart = () => {
    const cartList = useSelector((state) => state.cart.value)

    const dispatch = useDispatch();
  return (
    <div>
        <table className='cartTable'>
            <thead>
                <tr>
                    <th>Phone Name</th>
                    <th>Image</th>
                    <th>Cost</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {cartList.map((cart) => {
                    return(
                        <tr key={cart.ID} className="cartTable">
                            <td>{cart.ItemName}</td>
                            <td><img src={`assets/${cart.ItemName}.jpg`} alt='' width='100px' height='100px' /></td>
                            <td>KSh. {cart.Price}</td>
                            <td><button type="button" className='deleteBtn'
                            onClick={() => 
                                dispatch(removeItem({
                                id: cart.ID
                                }))
                            }>Remove</button></td>
                        </tr>
                    )
                    })}
            </tbody>
        </table>
    </div>
  )
}

export default Cart