import React from 'react'
import { BsCart3 } from 'react-icons/bs';
import $ from 'jquery'; 

const Home = () => {
    // set nav bar to remain fixed after scroll 
    $(window).scroll(function(e){ 
        var $el = $('.navBar'); 
        var isPositionFixed = ($el.css('position') === 'fixed');
        if ($(this).scrollTop() && !isPositionFixed){ 
          $el.css({'position': 'fixed', 'top': '0px'}); 
        }
      });
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
                <div className="imagecolumn">
                  <img src="assets/Huawei Nova Y70.jpg" alt='' width='80%' />
                  <div className='productDesc'>
                    <h5>Huawei Nova Y70</h5>
                    <p>4GB RAM + 128GB ROM, Dual SIM, 6000mAh Battery. </p>
                    <br/>
                    <h5>KSh. 22,500</h5>
                    <div className='addToCart'>ADD TO CART</div>
                  </div>
                </div>
                {/* end of first product */}
                <div className="imagecolumn">
                  <img src="assets/Infinix Hot 12i.jpg" alt='' width='80%' />
                  <h5>Infinix Hot 12i</h5>
                  <p>2GB RAM + 64GB ROM, Dual SIM, 6.6 Inch Screen Display, 5000mAh Battery. </p>
                  <br/>
                  <h5>KSh. 12,900</h5>
                  <div className='addToCart'>ADD TO CART</div>
                </div>
                {/* end of second product */}
                <div className="imagecolumn">
                  <img src="assets/Samsung Galaxy S9.jpg" alt='' width='80%' />
                  <h5>Samsung Galaxy S9</h5>
                  <p>4GB RAM + 64GB ROM, Single SIM, 12MP Camera.</p>
                  <br/>
                  <h5>KSh. 26,500</h5>
                  <div className='addToCart'>ADD TO CART</div>
                </div>
                {/* end of third product */}
                <div className="imagecolumn">
                  <img src="assets/Oppo F11.jpg" alt='' width='80%' />
                  <h5>Oppo F11</h5>
                  <p>6GB RAM + 128GB ROM, 6.53 Inch Screen Display, 48MP Camera. </p>
                  <br/>
                  <h5>KSh. 20,500</h5>
                  <div className='addToCart'>ADD TO CART</div>
                </div>
                {/* end of fourth product */}
                <div className="imagecolumn">
                  <img src="assets/Tecno Spark 8C.jpg" alt='' width='80%' />
                  <h5>Tecno Spark 8C</h5>
                  <p>2GB RAM + 64GB ROM, Dual SIM, 6.6 Inch Screen Display, 13MP Camera. </p>
                  <br/>
                  <h5>KSh. 22,500</h5>
                  <div className='addToCart'>ADD TO CART</div>
                </div>
                {/* end of fifth product */}
                <div className="imagecolumn">
                  <img src="assets/Itel P38.jpg" alt='' width='80%' />
                  <h5>Itel P38</h5>
                  <p>Android 11, 2GB RAM + 32GB ROM, 6.6 Inch Screen Display, 500mAh Battery. </p>
                  <br/>
                  <h5>KSh. 11,500</h5>
                  <div className='addToCart'>ADD TO CART</div>
                </div>
                {/* end of sixth product */}
                <div className="imagecolumn">
                  <img src="assets/Realme C11.jpg" alt='' width='80%' />
                  <h5>Realme C11</h5>
                  <p>2GB RAM + 32GB ROM, Dual SIM, 6.52 Inch Screen Display, 5000mAh Battery. </p>
                  <br/>
                  <h5>KSh. 10,900</h5>
                  <div className='addToCart'>ADD TO CART</div>
                </div>
                {/* end of seventh product */}
                <div className="imagecolumn">
                  <img src="assets/XIAOMI Redmi 10C.jpg" alt='' width='80%' />
                  <h5>XIAOMI Redmi 10C</h5>
                  <p>4GB RAM + 64GB ROM, Dual SIM, 6.71 Inch Screen Display, 5000mAh Battery. </p>
                  <br/>
                  <h5>KSh. 17,900</h5>
                  <div className='addToCart'>ADD TO CART</div>
                </div>
                {/* end of eighth product */}
              </div>
        </div>
    </div>
  )
}

export default Home