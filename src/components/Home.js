import React from 'react'
import { BsCart3 } from 'react-icons/bs';
import $ from 'jquery'; 
import {useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';

import { addToCart } from '../features/CartSlice';

const Home = () => {
    // set nav bar to remain fixed after scroll 
    $(window).scroll(function(e){ 
        var $el = $('.navBar'); 
        var isPositionFixed = ($el.css('position') === 'fixed');
        if ($(this).scrollTop() && !isPositionFixed){ 
          $el.css({'position': 'fixed', 'top': '0px'}); 
        }
      });

      const navigate = useNavigate();

      const phoneList = useSelector((state) => state.products.value)
      const cartList = useSelector((state) => state.cart.value)
    //   let Quant = useSelector((state) => state.cart.quantity)

      const dispatch = useDispatch();
  return (
    <div>
        <div className='navBar'>
            <h2>PHONE SHOP</h2>
            <h6>Shop with us today for greater experience</h6>
            <h4>
                <span className='cartPosition'><BsCart3 size={20}/> Cart</span>
                <div className='cartCount' onClick={()=>navigate("/cart")}>{cartList.length}</div>
            </h4>
        </div>

        <div className='cartData'>
            <h3>PRODUCTS</h3>
            <div className="imagerow"> 
                {phoneList.map((phone) => {
                    return(
                        <div className="imagecolumn" key={phone.id}>
                            <img src={`assets/${phone.phonename}.jpg`} alt='' width='80%' />
                            <h5>{phone.phonename}</h5>
                            <p>{phone.description}</p>
                            <h5>KSh. {phone.price}</h5>
                            <div className='addToCart' onClick={() => 
                                dispatch(addToCart({
                                id: phone.id,
                                ItemName: phone.phonename,
                                Price: phone.price
                                }))

                                // console.log(Quant++)
                            }>ADD TO CART</div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Home