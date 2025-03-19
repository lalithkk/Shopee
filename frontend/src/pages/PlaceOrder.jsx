import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../components/StoreContext'
const PlaceOrder = () => {
  const{getTotalCartAmount} =useContext(StoreContext)

  return (
    <div>
      <form className='place-order'>
        <div className='place-order-left'>
          <p className='title'>Delivey Info</p>
          <div className='multi-fields'>
            <input type='text' placeholder='First name'/>
            <input type='text' placeholder='Last name'/>
          </div>
          <input type='email' placeholder='email'/>
          <input type='text' placeholder='Street'/>

          <div className='multi-fields'>
            <input type='text' placeholder='city'/>
            <input type='text' placeholder='state'/>
          </div>
          <div className='multi-fields'>
            <input type='text' placeholder='Country'/>
            <input type='text' placeholder='Zip code'/>
          </div>
          <input type="number" placeholder='phone number' /> 
          <div className="payment-type">
            <h3>Select Payment Method</h3>
              <div className="payment-options">
                  <label className="payment-option">
                      <input type="radio" name="payment" value="phonepe" />
                      <img src="https://i.pinimg.com/474x/10/16/93/10169346a15f48f251e88b9b8e8c5d9a.jpg" alt="PhonePe" />
                      PhonePe
                  </label>

                  <label className="payment-option">
                      <input type="radio" name="payment" value="googlepay" />
                      <img src="https://i.pinimg.com/474x/15/99/c9/1599c90b2da71c44807f417bbf45991e.jpg" alt="Google Pay" />
                      Google Pay
                  </label>

                  <label className="payment-option">
                      <input type="radio" name="payment" value="paypal" />
                      <img src="https://i.pinimg.com/474x/fd/b4/ef/fdb4efb9ec1f26dd2fac539282074f6f.jpg" alt="PayPal" />
                      PayPal
                  </label>

                  <label className="payment-option">
                      <input type="radio" name="payment" value="cash" />
                      <img src="https://i.pinimg.com/474x/97/89/bd/9789bd10c4ecbde7b61e5f6024c408cc.jpg" alt="Cash on Delivery" />
                      Cash on Delivery
                  </label>

                  <label className="payment-option">
                      <input type="radio" name="payment" value="card" />
                      <img src="https://i.pinimg.com/474x/e7/d2/28/e7d228c711c851dc3c8e551cc08807aa.jpg" alt="Credit/Debit Card" />
                      Credit/Debit Card
                  </label>

                  <label className="payment-option">
                      <input type="radio" name="payment" value="upi" />
                      <img src="https://i.pinimg.com/474x/f7/4a/57/f74a57a28725593d5ae63017ff88b9cb.jpg" alt="UPI" />
                      UPI
                  </label>
              </div>
          </div>

        </div>


        <div className='place-order-right'>
            <div className='cart-total'>
              <h2>Cart Total</h2>
              <div>
                <div className='cart-total-details'>
                  <p>Subtotal</p>
                  <p>₹{getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className='cart-total-details'>
            <p>Delivery Fee</p>
            <p>₹{getTotalCartAmount()===0?0:30}</p>
          </div>
          <hr/>
          <div className='cart-total-details'>
            <b>Total</b>
            <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+30}</b>
          </div>
              </div>
              <button>Place order</button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder
