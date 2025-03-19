import React, { useContext} from 'react'
import './FoodIteam.css'
import { assets } from '../assets/assets'
import { StoreContext } from './StoreContext'

const FoodIteam = ({id,name,price,description,image }) => {

   
    const {cartItems,addToCart,removeFromCart} =useContext(StoreContext)
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt='All-images'/>
        {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.cart12} alt='pluse'/>
                :<div className='food-item-counter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt='mins'/>
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt='pluse-green'/>
                </div>
        }
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>{name}</p>
            <img src={assets.rating_starts} alt='stars'/>
        </div>
        <p className='food-item-description'>{description}</p>
        <p className='food-item-price'>₹{price}</p>
      </div>
    </div>
  )
}

export default FoodIteam
