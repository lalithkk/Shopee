import React from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
const Navbar = ({setShowLogin}) => {
  

  return (
    <div className='navbar'>  
    <img src={assets.logo} alt='logo' className='logo'/>
        <ul className='navbar-menu'>
        <li><Link to="/">Home</Link></li>
        
            <li className='has-child'><a href="#">Foodgrain,oil& masala</a>
              <div className='mega'>
                <div className='container'>
                  <div className='wrapper'>
                    <div className='flexcol'>
                      <div className='row'>
                        <h3>Masala</h3>
                          <ul>
                            <li><a href='#'>Whole Spices</a></li>
                            <li><a href='#'>Powder Spices</a></li>
                            <li><a href='#'>Blended Spices</a></li>
                            <li><a href='#'>cooking pastes </a></li>
                            <li><a href='#'>Hing</a></li>
                            <li><a href='#'>Herbs & Seasonings</a></li>
                            <li><a href='#'>Food Colour & flavours</a></li>
                          </ul>
                      </div>
                    </div>
                    <div className='flexcol'>
                      <div className='row'>
                        <h3>Sugar</h3>
                          <ul>
                            <li><a href='#'>Crystal Sugar</a></li>
                            <li><a href='#'>Brown &Value Added Sugar</a></li>
                          </ul>
                      </div>
                    </div>
                    <div className='flexcol'>
                      <div className='row'>
                        <h3>Ghee</h3>
                          <ul>
                            <li><a href='#'>cow Ghee</a></li>
                            <li><a href='#'>Desi Ghee</a></li>
                          </ul>
                      </div>
                    </div>
                    <div className='flexcol'>
                      <div className='row'>
                        <h3>Split Pulses</h3>
                          <ul>
                            <li><a href='#'>Moong</a></li>
                            <li><a href='#'>Arhar</a></li>
                            <li><a href='#'>Chana</a></li>
                            <li><a href='#'>Urad</a></li>
                          </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className='has-child'><a href="#">Fruits & vegetables</a>
              <div className='mega'>
                <div className='container'>
                  <div className='wrapper'>
                    <div className='flexcol'>
                      <div className='row'>
                        <h3>Fresh Vegetables</h3>
                          <ul>
                            <li><a href='#'>Leafy & Rooty Vegetables</a></li>
                            <li><a href='#'>Onion, Potato & Tomato</a></li>
                            <li><a href='#'>Chilly, Lemon, Ginger & Garlic </a></li>
                            <li><a href='#'>Cabbage, Cauliflower & Capsicum </a></li>
                            <li><a href='#'>Beans, Brinjal & Bhindi </a></li>
                            <li><a href='#'>Carrot & Cucumber</a></li>
                            <li><a href='#'>cabbage,cauliflower & capsicum</a></li>
                            <li><a href='#'>Beans,Brainjal&Bhindi </a></li>
                            <li><a href='#'>Gourds</a></li>
                            <li><a href='#'>Peas,Corn & Mushrooms</a></li>
                          </ul>
                      </div>
                    </div>
                    <div className='flexcol'>
                      <div className='row'>
                        <h3>Fresh Fruits</h3>
                          <ul>
                            <li><a href='#'>Grapes & Guava</a></li>
                            <li><a href='#'>Exotic Fruits</a></li>
                            <li><a href='#'>Orange & Kinnow </a></li>
                            <li><a href='#'>Melons </a></li>
                            <li><a href='#'>Apple  </a></li>
                            <li><a href='#'>Bananas</a></li>
                            <li><a href='#'>Pine Apple & Papaya</a></li>
                            <li><a href='#'>Plums, Pears & Pomogranate </a></li>
                            <li><a href='#'>Sprouts</a></li>
                            <li><a href='#'>Fresh dates </a></li>
                          </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className='has-child'><a href="#">Dairy & Bakery</a>
              <div className='mega'>
                <div className='container'>
                  <div className='wrapper'>
                    <div className='flexcol'>
                      <div className='row'>
                        <h3>Cheese</h3>
                          <ul>
                            <li><a href='#'>Cheese Cubes</a></li>
                            <li><a href='#'>Cheese Slice</a></li>
                            <li><a href='#'>Cheese Spread</a></li>
                          </ul>
                      </div>
                    </div>
                    <div className='flexcol'>
                      <div className='row'>
                        <h3>Milk, Cream & Sweets</h3>
                          <ul>
                            <li><a href='#'>Fresh Milk & Soya Milk</a></li>
                            <li><a href='#'>Fino & Tetra Pack Milk</a></li>
                            <li><a href='#'>Cream </a></li>
                            <li><a href='#'>Flavoured Milk </a></li>
                            <li><a href='#'>Desserts</a></li>
                          </ul>
                      </div>
                    </div>
                    <div className='flexcol'>
                      <div className='row'>
                        <h3>Butter & Margarine</h3>
                          <ul>
                            <li><a href='#'>Table Butter</a></li>
                            <li><a href='#'>Margarine</a></li>
                            <li><a href='#'>Cream</a></li>
                          </ul>
                      </div>
                    </div>
                    <div className='flexcol'>
                      <div className='row'>
                        <h3>Curd, Paneer & Chaas</h3>
                          <ul>
                            <li><a href='#'>Curd & Yogur</a></li>
                            <li><a href='#'>Paneer & Tofu</a></li>
                            <li><a href='#'>Chaas & Lassi</a></li>
                          </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className='has-child'><a href="#">Non-veg</a>
              <div className='mega'>
                <div className='container'>
                  <div className='wrapper'>
                    <div className='flexcol'>
                      <div className='row'>
                        <h3>Chicken & Eggs</h3>
                          <ul>
                            <li><a href='#'>Fresh Whole & Cut Chicken</a></li>
                            <li><a href='#'>Frozen Chicken</a></li>
                            <li><a href='#'>White Eggs</a></li>
                            <li><a href='#'>Brown Eggs </a></li>
                          </ul>
                      </div>
                    </div>
                    <div className='flexcol'>
                      <div className='row'>
                        <h3>Fish & Seafood</h3>
                          <ul>
                            <li><a href='#'>Fresh(Sea Water)Cut & Whole</a></li>
                            <li><a href='#'>Fresh(Fresh Water)Cut & Whole</a></li>
                            <li><a href='#'>Fresh Prawns </a></li>
                            <li><a href='#'>Canned Fish</a></li>
                            <li><a href='#'>Frozen Seafoods  </a></li>
                            <li><a href='#'>Dried Fish</a></li>
                            <li><a href='#'>Fresh Squid, Cuttle Fish & Other</a></li>
                          </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            
            <li><Link to="/about">About us</Link></li>
            <li><a href="#">Contant us</a></li>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt='search'/>
            <div className='navbar-search-icon'>
            <Link to='/cart'><img src={assets.basket_icon} alt='basket'/></Link>
                <div className='dot'></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sing In</button>
        </div>
    </div>
  )
}

export default Navbar
