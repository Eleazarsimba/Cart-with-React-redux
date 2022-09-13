import React from 'react'
import { BsCart3 } from 'react-icons/bs';
import $ from 'jquery'; 
import { useSelector } from 'react-redux';

const Home = () => {
    // set nav bar to remain fixed after scroll 
    $(window).scroll(function(e){ 
        var $el = $('.navBar'); 
        var isPositionFixed = ($el.css('position') === 'fixed');
        if ($(this).scrollTop() && !isPositionFixed){ 
          $el.css({'position': 'fixed', 'top': '0px'}); 
        }
      });

      const phoneList = useSelector((state) => state.products.value)
  return (
    <div>
        <div className='navBar'>
            <h2>PHONE SHOP</h2>
            <h6>Shop with us today for greater experience</h6>
            <h4>
                <span className='cartPosition'><BsCart3 size={20}/> Cart</span>
                <div className='cartCount'>0</div>
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
                        <div className='addToCart'>ADD TO CART</div>
                    </div>
                )
                })}
            </div>
        </div>
    </div>
  )
}

export default Home