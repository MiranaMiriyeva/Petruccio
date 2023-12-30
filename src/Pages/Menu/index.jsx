import React, { useState } from 'react';
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { addToFavorites, addToOrders, removeFromFavorites } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { faHeart as faHeartSolid, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modals/AddedToOrder';





const data = [
  {
    category: 'Burgers',
    items: [
      {
        id: 1,
        name: 'Whopper Burger',
        description: '100% beef patty, melted cheddar cheese, fresh onions, cucumber, tomato, fresh Iceberg lettuce and special sauce on a caramelized bun with sesame.',
        price: 13,
        image: 'https://www.burgerking.com.my/upload/image/Product/9/Whopper%20With%20Cheese%20Ala%20Carte.jpg',
      },
      {
        id: 2,
        name: "Cheeseburger",
        description: "A classic combination including a 100% pure beef patty, pickles, onion, mustard and ketchup, and of course, a slice of melted Cheddar cheese in a caramelized bun.",
        price: 11,
        image: "https://www.burgerking.com.my/upload/image/Product/16/Cheeseburger%20%28Single%29%20Ala%20Carte.jpg"
      },
      {
        id: 3,
        name: "Double Cheeseburger",
        description: "Two 100% beefy patties, two slices of melted cheese, tangy pickles, minced onions, ketchup and mustard served in a caramelized bun.",
        price: 13,
        image: "https://www.burgerking.com.my/upload/image/Product/56/Cheeseburger%20%28Double%29%20Ala%20Carte.jpg"
      },
      {
        id: 4,
        name: "Chicken Burger",
        description: "Fried, breaded crispy chicken fillet served on a caramelized bun, with fresh Iceberg lettuce and special sauce.",
        price: 13,
        image: "https://www.burgerking.com.my/upload/image/Product/5/Chick%20N%20Crisp%20Ala%20Carte.jpg"
      },
      {
        id: 5,
        name: "Long Chicken",
        description: "Delightfully tasty crispy chicken fillet topped with shredded lettuce and creamy mayo, and served on a sesame seed bun-made extra long.",
        price: 15,
        image: "https://www.burgerking.com.my/upload/image/Product/2/PlantBased_SuperRebel_BK_LongChicken_TC.jpg"
      },
      {
        id: 6,
        name: "French Chicken",
        description: "Crispy long chicken patty with a combination of chicken strips, melted Swiss cheese and creamy mayo sandwiched between two long sesame seed buns",
        price: 16,
        image: "https://www.burgerking.com.my/upload/image/Product/101/J1001846-BKMY-FRENCHCHICKENCOMEBACK-WEBSITESKU-300x270.png"
      },
      {
        id: 7,
        name: "Fish Burger",
        description: "We invite you to try our crispy fish burger served with sliced cheese and tartar sauce in a freshly toasted bun.",
        price: 14,
        image: "https://www.burgerking.com.my/upload/image/Product/39/Fish%20N%20Crisp%20Ala%20Carte.jpg"
      },
    ],
  },
  {
    category: 'Pizza',
    items: [
      {
        id: 8,
        name: 'Pepperoni',
        description: 'Pizza Sauce, Pepperoni, Extra Mozzarella',
        price: 23,
        image: 'https://www.papajohns.az/uploads/images/klassik_pepperoni.jpg',
      },
      {
        id: 9,
        name: "Chicken Parmesan",
        description: "Pizza Sauce, Chicken Poppers, Mushrooms, Italian Flavoring, Garlic Parmesan Sauce, Mozzarella",
        price: 24,
        image: "https://www.papajohns.az/uploads/images/chicken_parmesan_item.jpg"
      },
      {
        id: 10,
        name: "Spicy Chicken Ranch",
        description: "Ranch Sauce, Grilled Chicken, Mushrooms, Jalapeno, Tomatoes, Mozzarella",
        price: 21,
        image: "https://www.papajohns.az/uploads/images/pizza/Spicy-chicken-ranch.png"
      },
      {
        id: 11,
        name: "American Hot",
        description: "Pizza Sauce, Pepperoni, Jalapeno, Mozzarella",
        price: 21,
        image: "https://www.papajohns.az/uploads/images/pizza/american-hot.png"
      },
      {
        id: 12,
        name: "Carnival",
        description: "Pizza sauce, Mushrooms, Black Olives, Pepperoni, Mozzarella",
        price: 25,
        image: "https://www.papajohns.az/uploads/images/pizza/Karnaval.jpg"
      },
      {
        id: 13,
        name: "Spicy Garden",
        description: "Pizza Sauce, Tomatoes, Mushrooms, Black Olives, Green Peppers, Jalapeno, Mozzarella",
        price: 27,
        image: "https://www.papajohns.az/uploads/images/pizza/vegetarian-acili.png"
      },
      {
        id: 14,
        name: "Italy",
        description: "Pizza sauce, Pepperoni, Italian Sausage, Mushrooms, Black Olives, Oregano, Mozzarella",
        price: 25,
        image: "https://www.papajohns.az/uploads/images/little_italy.jpg"
      },
      {
        id: 15,
        name: "Super Pizza",
        description: "Pizza Sauce, Pepperoni, Italian Sausage, Turkey Ham, Mushrooms, Green Peppers, Black Olives, Mozzarella",
        price: 27,
        image: "https://www.papajohns.az/uploads/images/super-papa.jpg"
      },
    ],
  },
  {
    category: 'Sides',
    items: [
      {
        id: 16,
        name: 'French Fries',
        description: 'Delicious, deep-fried and slightly salted potato sticks',
        price: 4,
        image: 'https://static.vecteezy.com/system/resources/previews/025/063/639/original/french-fries-with-ai-generated-free-png.png',
      },
      {
        id: 17,
        name: "Cheesy Fries",
        description: "Delicious, deep-fried and slightly salted potato sticks with cheese",
        price: 6,
        image: "https://www.burgerking.com.my/upload/image/Product/31/Cheesy%20Fries.jpg"
      },
      {
        id: 18,
        name: "Cheese Sticks",
        description: "Crispy on the outside and gooey on the inside, mozzarella cheese sticks are a delectable indulgence, perfect for dipping into savory sauces.",
        price: 5,
        image: "https://www.burgerking.com.my/upload/image/Product/134/Mozzarella%20Cheese%20Stick%205pcs.jpg"
      },
      {
        id: 19,
        name: "Nuggets",
        description: "Deep-fired chicken fillet. ",
        price: 5,
        image: "https://www.burgerking.com.my/upload/image/Product/21/Nuggets%206pcs.jpg"
      },
      {
        id: 20,
        name: "Onion Rings",
        description: "Deep-fried onion rings.",
        price: 3,
        image: "https://www.burgerking.com.my/upload/image/Product/17/Onion%20Ring%205pcs.jpg"
      },
    ],
  },
  {
    category: 'Beverages',
    items: [
      {
        id: 21,
        name: 'Coca-Cola',
        description: '0.5 l',
        price: 2,
        image: 'https://www.kfc-az.com/admin/files/5415.png',
      },
      {
        id: 22,
        name: "Fanta",
        description: "0.5 l",
        price: 2,
        image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/65050187eb3e198d58d4c78d/y2vj63esozdyxdkzishfebq_ldpsy3nb38d2sxsqthrwygqmwz7-4liyfkx1mdqzujoxtlhq0mwga6jvzb8y7zdzb5aemglgirterrt-.png"
      },
      {
        id: 23,
        name: "Sprite",
        description: "0.5 l",
        price: 2,
        image: "https://www.kfc-az.com/admin/files/5418.png"
      },
      {
        id: 24,
        name: "Water",
        description: "0.5 l ",
        price: 1,
        image: "https://www.kfc-az.com/admin/files/5427.png"
      },
      {
        id: 25,
        name: "Cuppucino",
        description: "0.5 l",
        price: 3,
        image: "https://www.burgerking.com.my/upload/image/Product/35/Hot%20Cuppucino.jpg"
      },
      {
        id: 26,
        name: "Americano",
        description: "0.5 l",
        price: 5,
        image: "https://www.burgerking.com.my/upload/image/Product/32/Ice%20Americano.jpg"
      },
      {
        id: 27,
        name: "Latte",
        description: "0.5 l",
        price: 5,
        image: "https://www.burgerking.com.my/upload/image/Product/33/Hot%20Latte.jpg"
      },
      {
        id: 28,
        name: "Mocha",
        description: "0.5 l ",
        price: 5,
        image: "https://www.burgerking.com.my/upload/image/Product/34/Hot%20Mocha.jpg"
      },
    ],
  },
  {
    category: 'Sauces',
    items: [
      {
        id: 29,
        name: 'Ketchup',
        description: 'Appetizing tomato sauce.',
        price: 1,
        image: 'https://cdn.culvers.com/menu/images/item/sauces-dressings/ketchup.png?q=100&w=430&format=auto',
      },
      {
        id: 30,
        name: "Cheese Sauce",
        description: "Delicate sauce of cheese.",
        price: 1,
        image: "https://cdn.culvers.com/menu/images/item/sauces-dressings/wi-cheddar-cheese.png?q=100&w=430&format=auto"
      },
      {
        id: 31,
        name: "Mustard Sauce",
        description: "Hot and smooth orignal mustard sauce.",
        price: 1,
        image: "https://cdn.culvers.com/menu/images/item/sauces-dressings/mustard.png?q=100&w=430&format=auto"
      },
      {
        id: 32,
        name: "Mayonniuse",
        description: "Tasty and flavorous sauce. ",
        price: 1,
        image: "https://cdn.culvers.com/menu/images/item/sauces-dressings/mayo.png?q=100&w=430&format=auto"
      },
      {
        id: 33,
        name: "Cocktail Sauce",
        description: "Appetizing sauce with rich taste.",
        price: 1,
        image: "https://cdn.culvers.com/menu/images/item/sauces-dressings/culvers-signature.png?q=100&w=430&format=auto"
      },
      {
        id: 34,
        name: "Barbecue Sauce",
        description: "Appetizing flavoured sauce.",
        price: 1,
        image: "https://cdn.culvers.com/menu/images/item/sauces-dressings/bbq.png?q=100&w=430&format=auto"
      },
      {
        id: 35,
        name: "Salsa Sauce",
        description: "Appetizing flavoured sauce.",
        price: 1,
        image: "https://cdn.culvers.com/menu/images/item/sauces-dressings/shirmp-cocktail.png?q=100&w=430&format=auto"
      },
      {
        id: 36,
        name: "Sweet Sauce",
        description: "Flavorous and sweet sauce.",
        price: 1,
        image: "https://cdn.culvers.com/menu/images/item/sauces-dressings/franks-redhot.png?q=100&w=430&format=auto"
      },
    ],
  },
];
const Menu = () => {
  const favorites = useSelector(state => state.favorites)
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders)
  const dis = useDispatch();
  
  const [orderCount, setOrderCount] = useState({});
  const handleAddToOrder = (itemId) => {
    if (!orders.some(orderItem => orderItem.id === itemId)) {
      setOrderCount((prevCount) => ({
        ...prevCount,
        [itemId]: (prevCount[itemId] || 1) + 1,
      }));
      dis(addToOrders(item));
    }
  };

  const handleRemoveFromOrder = (itemId) => {
    if (orderCount[itemId] && orderCount[itemId] > 1) {
      setOrderCount(prevCount => ({
        ...prevCount,
        [itemId]: prevCount[itemId] - 1,
      }));
    }
  };
  const [modalOpened, setModalOpened] = useState(false);


  const modalOpen= () => {
    setModalOpened(true);
  };

  const modalClosed = () => {
    setModalOpened(false);
  };
  return (
    <div className='container'>
      {data.map((category, index) => (
        <div className='card' key={index}>
          <h1 className='categoryname'>{category.category}</h1>
          <div className='card-container'>
            {category.items.map((item, itemIndex) => (
              <div className='card' key={itemIndex}>
                <h2 className='item-name'>{item.name}</h2>
                <hr />
                <div className="image-container" style={{ position: 'relative' }}>
                  <img src={item.image} alt={item.name} />
                  {favorites.find(prop => prop.id === item.id) ? (
                    <span className='fav-icon' onClick={() => dispatch(removeFromFavorites(item.id))}>
                      <FontAwesomeIcon
                        icon={faHeartSolid}
                        style={{
                          position: 'absolute',
                          top: '5px',
                          right: '5px',
                          color: '#ff0000',
                          fontSize: '2.5em',
                        }}
                      />
                    </span>
                  ) : (
                    <span className='fav-icon' onClick={() => dispatch(addToFavorites(item))}>
                      <FontAwesomeIcon
                        icon={faHeart}
                        style={{
                          position: 'absolute',
                          top: '5px',
                          right: '5px',
                          color: '#ff0000',
                          fontSize: '2.5em',
                        }}
                      />
                    </span>
                  )}
                </div>
                <p className='description'>{item.description}</p>
                <div className='button-container'>
                  <button className='price'>{item.price} $</button>
                  <div className='order-container'>
                    <div className='order-controls'>
                      <button onClick={() => handleRemoveFromOrder(item.id)}>-</button>
                      <span className='order-count'>{orderCount[item.id] || 1}</span>
                      <button onClick={() => handleAddToOrder(item.id)}>+</button>
                    </div>
                    <span onClick={() => { dis(addToOrders(item)); modalOpen(); }}>
                      <FontAwesomeIcon className='order-button' icon={faShoppingCart} style={{ color: 'green' }} />
                    </span>
                     {modalOpened && (
                    <Modal close={modalClosed}>
                      <p>Successfully added to cart! </p>
                      <p>Go to Order to confirm the cart.</p>
                    </Modal>
                  )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;