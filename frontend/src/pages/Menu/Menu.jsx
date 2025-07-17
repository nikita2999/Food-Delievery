import React from 'react'
import './Menu.css'

const Menu = () => {
  return (
    <div>
      <div className="menuu">
        <div className="view-menu">
          <h1>MENU</h1>
        </div>
        <div className='menu-category'></div>
        <div className='menu-items'><span>Salad</span></div>
        <div className="food-items">
          <ul className='food-items-main'>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_1.png" alt="Greek Salad" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Greek Salad</span></div>
                    <div className='dish-price'>Price :- <span>₹180</span></div>
                    <div className='dish-review'>Review :- <span>Fresh vegetables with feta cheese and olives.</span></div>
                  </div>
                </div>
                <p className="food-title">Greek Salad</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_2.png" alt="Veg Salad" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Veg Salad</span></div>
                    <div className='dish-price'>Price :- <span>₹120</span></div>
                    <div className='dish-review'>Review :- <span>Tossed to perfection</span></div>
                  </div>
                </div>
                <p className="food-title">Veg Salad</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_3.png" alt="Clover Salad" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Clover Salad</span></div>
                    <div className='dish-price'>Price :- <span>₹130</span></div>
                    <div className='dish-review'>Review :- <span>Light & Healthy</span></div>
                  </div>
                </div>
                <p className="food-title">Clover Salad</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_4.png" alt="Chicken Salad" />
                  </div>
                  <div className="flip-card-back">
                     <div className='dish-name'>Name :- <span>Chicken Salad</span></div>
                    <div className='dish-price'>Price :- <span>₹150</span></div>
                    <div className='dish-review'>Review :- <span>Garden-picked flavors</span></div>
                  </div>
                </div>
                <p className="food-title">Chicken Salad</p>
              </div>
            </li>
          </ul>
        </div>
        <div className='menu-items'><span>Rolls</span></div>
        <div className="food-items">
          <ul className='food-items-main'>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_5.png" alt="Lasagna Rolls" />
                  </div>
                  <div className="flip-card-back">
                     <div className='dish-name'>Name :- <span>Lasagna Rolls</span></div>
                    <div className='dish-price'>Price :- <span>₹180</span></div>
                    <div className='dish-review'>Review :- <span>Spicy & Savory</span></div>
                  </div>
                </div>
                <p className="food-title">Lasagna Rolls</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_6.png" alt="Peri Peri Rolls" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Peri Peri Rolls</span></div>
                    <div className='dish-price'>Price :- <span>₹170</span></div>
                    <div className='dish-review'>Review :- <span>Crispy outside, juicy inside</span></div>
                  </div>
                </div>
                <p className="food-title">Peri Peri Rolls</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_7.png" alt="Chicken Rolls" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Chicken Rolls</span></div>
                    <div className='dish-price'>Price :- <span>₹180</span></div>
                    <div className='dish-review'>Review :- <span>Street-style favorite</span></div>
                  </div>
                </div>
                <p className="food-title">Chicken Rolls</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_8.png" alt="Veg Rolls" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Veg Rolls</span></div>
                    <div className='dish-price'>Price :- <span>₹140</span></div>
                    <div className='dish-review'>Review :- <span>Wrapped with love</span></div>                  </div>
                </div>
                <p className="food-title">Veg Rolls</p>
              </div>
            </li>
          </ul>
        </div>
        <div className='menu-items'><span>Desserts</span></div>
        <div className="food-items">
          <ul className='food-items-main'>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_9.png" alt="Ripple Ice Cream" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Ripple Ice Cream</span></div>
                    <div className='dish-price'>Price :- <span>₹90</span></div>
                    <div className='dish-review'>Review :- <span>Cool & Creamy</span></div>
                  </div>
                </div>
                <p className="food-title">Ripple Ice Cream</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_10.png" alt="Fruit Ice Cream" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Fruit Ice Cream</span></div>
                    <div className='dish-price'>Price :- <span>₹100</span></div>
                    <div className='dish-review'>Review :- <span>A scoop of happiness</span></div>
                  </div>
                </div>
                <p className="food-title">Fruit Ice Cream</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_11.png" alt="Jar Ice Cream" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Jar Ice Cream</span></div>
                    <div className='dish-price'>Price :- <span>₹110</span></div>
                    <div className='dish-review'>Review :- <span>Sweet tooth delight</span></div>
                  </div>
                </div>
                <p className="food-title">Jar Ice Cream</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_12.png" alt="Vanilla Ice Cream" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Vanilla Ice Cream</span></div>
                    <div className='dish-price'>Price :- <span>₹95</span></div>
                    <div className='dish-review'>Review :- <span>Melt-in-mouth magic</span></div>
                  </div>
                </div>
                <p className="food-title">Vanilla Ice Cream</p>
              </div>
            </li>
          </ul>
        </div>
        <div className='menu-items'><span>Sandwich</span></div>
        <div className="food-items">
          <ul className='food-items-main'>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_13.png" alt="Chicken Sandwich" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Chicken Sandwich</span></div>
                    <div className='dish-price'>Price :- <span>₹150</span></div>
                    <div className='dish-review'>Review :- <span>Grilled to golden</span></div>
                  </div>
                </div>
                <p className="food-title">Chicken Sandwich</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_14.png" alt="Vegan Sandwich" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>vegan Sandwich</span></div>
                    <div className='dish-price'>Price :- <span>₹130</span></div>
                    <div className='dish-review'>Review :- <span>Double the layers</span></div>
                  </div>
                </div>
                <p className="food-title">Vegan Sandwich</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_15.png" alt="Grilled Sandwich" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Grilled Sandwich</span></div>
                    <div className='dish-price'>Price :- <span>₹140</span></div>
                    <div className='dish-review'>Review :- <span>Perfect lunch bite</span></div>
                  </div>
                </div>
                <p className="food-title">Grilled Sandwich</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_16.png" alt="Bread Sandwich" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Bread Sandwich</span></div>
                    <div className='dish-price'>Price :- <span>₹120</span></div>
                    <div className='dish-review'>Review :- <span>Toasty & Tasty</span></div>
                  </div>
                </div>
                <p className="food-title">Bread Sandwich</p>
              </div>
            </li>
          </ul>
        </div>
        <div className='menu-items'><span>Cake</span></div>
        <div className="food-items">
          <ul className='food-items-main'>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_17.png" alt="Cup Cake" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Cup Cake</span></div>
                    <div className='dish-price'>Price :- <span>₹70</span></div>
                    <div className='dish-review'>Review :- <span>Cool & Creamy</span></div>
                  </div>
                </div>
                <p className="food-title">Cup Cake</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_18.png" alt="Vegan Cake" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Vegan Cake</span></div>
                    <div className='dish-price'>Price :- <span>₹80</span></div>
                    <div className='dish-review'>Review :- <span>A scoop of happiness</span></div>
                  </div>
                </div>
                <p className="food-title">Vegan Cake</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_19.png" alt="Butterscotch Cake" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Butterscotch Cake</span></div>
                    <div className='dish-price'>Price :- <span>₹85</span></div>
                    <div className='dish-review'>Review :- <span>Sweet tooth delight</span></div>
                  </div>
                </div>
                <p className="food-title">Butterscotch Cake</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_20.png" alt="Sliced Cake" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Sliced Cake</span></div>
                    <div className='dish-price'>Price :- <span>₹75</span></div>
                    <div className='dish-review'>Review :- <span>Sweet tooth delight</span></div>
                  </div>
                </div>
                <p className="food-title">Sliced Cake</p>
              </div>
            </li>
          </ul>
        </div>
        <div className='menu-items'><span>Pure Veg</span></div>
        <div className="food-items">
          <ul className='food-items-main'>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_21.png" alt="Garlic Mushroom" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Garlic Mushroom</span></div>
                    <div className='dish-price'>Price :- <span>₹110</span></div>
                    <div className='dish-review'>Review :- <span>Pure veg goodness</span></div>
                  </div>
                </div>
                <p className="food-title">Garlic Mushroom</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_22.png" alt="Fried Cauliflower" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Fried Cauliflower</span></div>
                    <div className='dish-price'>Price :- <span>₹100</span></div>
                    <div className='dish-review'>Review :- <span>Pure veg goodness</span></div>
                  </div>
                </div>
                <p className="food-title">Fried Cauliflower</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_23.png" alt="Mix Veg Pulao" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Mix Veg Pulao </span></div>
                    <div className='dish-price'>Price :- <span>₹120</span></div>
                    <div className='dish-review'>Review :- <span>Pure veg goodness</span></div>
                  </div>
                </div>
                <p className="food-title">Mix Veg Pulao</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_24.png" alt="Rice Zucchini" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Rice Zucchini</span></div>
                    <div className='dish-price'>Price :- <span>₹130</span></div>
                    <div className='dish-review'>Review :- <span>Pure veg goodness</span></div>
                  </div>
                </div>
                <p className="food-title">Rice Zucchini</p>
              </div>
            </li>
          </ul>
        </div>
        <div className='menu-items'><span>Pasta</span></div>
        <div className="food-items">
          <ul className='food-items-main'>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_25.png" alt="Cheese Pasta" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Cheese Pasta</span></div>
                    <div className='dish-price'>Price :- <span>₹160</span></div>
                    <div className='dish-review'>Review :- <span>Cheesy & Saucy</span></div>
                  </div>
                </div>
                <p className="food-title">Cheese Pasta</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_26.png" alt="Tomato Pasta" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Tomato Pasta</span></div>
                    <div className='dish-price'>Price :- <span>₹150</span></div>
                    <div className='dish-review'>Review :- <span>Cheesy & Saucy</span></div>
                  </div>
                </div>
                <p className="food-title">Tomato Pasta</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_27.png" alt="Creamy Pasta" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Creamy Pasta</span></div>
                    <div className='dish-price'>Price :- <span>₹170</span></div>
                    <div className='dish-review'>Review :- <span>Cheesy & Saucy</span></div>
                  </div>
                </div>
                <p className="food-title">Creamy Pasta</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_28.png" alt="Chicken Pasta" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Chicken Pasta</span></div>
                    <div className='dish-price'>Price :- <span>₹180</span></div>
                    <div className='dish-review'>Review :- <span>Cheesy & Saucy</span></div>
                  </div>
                </div>
                <p className="food-title">Chicken Pasta</p>
              </div>
            </li>
          </ul>
        </div>
        <div className='menu-items'><span>Noodles</span></div>
        <div className="food-items">
          <ul className='food-items-main'>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_29.png" alt="Buttter Noodles" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Buttter Noodles</span></div>
                    <div className='dish-price'>Price :- <span>₹100</span></div>
                    <div className='dish-review'>Review :- <span>Slurpy goodness</span></div>
                  </div>
                </div>
                <p className="food-title">Buttter Noodles</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_30.png" alt="Veg Noodles" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Veg Noodles</span></div>
                    <div className='dish-price'>Price :- <span>₹90</span></div>
                    <div className='dish-review'>Review :- <span>Slurpy goodness</span></div>
                  </div>
                </div>
                <p className="food-title">Veg Noodles</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_31.png" alt="Somen Noodles" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Somen Noodles</span></div>
                    <div className='dish-price'>Price :- <span>₹95</span></div>
                    <div className='dish-review'>Review :- <span>Slurpy goodness</span></div>
                  </div>
                </div>
                <p className="food-title">Somen Noodles</p>
              </div>
            </li>
            <li className='food-items-list'>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="../../assets/food_32.png" alt="Cooked Noodles" />
                  </div>
                  <div className="flip-card-back">
                    <div className='dish-name'>Name :- <span>Cooked Noodles</span></div>
                    <div className='dish-price'>Price :- <span>₹105</span></div>
                    <div className='dish-review'>Review :- <span>Slurpy goodness</span></div>
                  </div>
                </div>
                <p className="food-title">Cooked Noodles</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu
