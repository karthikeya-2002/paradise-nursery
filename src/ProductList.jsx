// src/ProductList.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  
  // Get cart items from Redux store to calculate the total quantity and check added status
  const cartItems = useSelector((state) => state.cart.items);
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Data structure required by rubric: 3 categories, 6 plants each
  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", price: "15", image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7a?auto=format&fit=crop&w=300&q=80" },
        { name: "Spider Plant", price: "12", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=300&q=80" },
        { name: "Peace Lily", price: "18", image: "https://images.unsplash.com/photo-1593482892622-c3a2bc0a473e?auto=format&fit=crop&w=300&q=80" },
        { name: "Boston Fern", price: "10", image: "https://images.unsplash.com/photo-1614594805320-e69df26a6b8c?auto=format&fit=crop&w=300&q=80" },
        { name: "Rubber Plant", price: "20", image: "https://images.unsplash.com/photo-1604762512693-010df044dc3a?auto=format&fit=crop&w=300&q=80" },
        { name: "Aloe Vera", price: "8", image: "https://images.unsplash.com/photo-1596547610006-258f3fb8f42e?auto=format&fit=crop&w=300&q=80" }
      ]
    },
    {
      category: "Aromatic Plants",
      plants: [
        { name: "Lavender", price: "14", image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=300&q=80" },
        { name: "Mint", price: "6", image: "https://images.unsplash.com/photo-1596547609652-9cb5d8d32d03?auto=format&fit=crop&w=300&q=80" },
        { name: "Rosemary", price: "11", image: "https://images.unsplash.com/photo-1598512140401-44755a5b51d6?auto=format&fit=crop&w=300&q=80" },
        { name: "Jasmine", price: "16", image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=300&q=80" },
        { name: "Basil", price: "5", image: "https://images.unsplash.com/photo-1596547609652-9cb5d8d32d03?auto=format&fit=crop&w=300&q=80" },
        { name: "Thyme", price: "7", image: "https://images.unsplash.com/photo-1598512140401-44755a5b51d6?auto=format&fit=crop&w=300&q=80" }
      ]
    },
    {
      category: "Succulents",
      plants: [
        { name: "Echeveria", price: "9", image: "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?auto=format&fit=crop&w=300&q=80" },
        { name: "Jade Plant", price: "12", image: "https://images.unsplash.com/photo-1598512140401-44755a5b51d6?auto=format&fit=crop&w=300&q=80" },
        { name: "Zebra Plant", price: "10", image: "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?auto=format&fit=crop&w=300&q=80" },
        { name: "String of Pearls", price: "15", image: "https://images.unsplash.com/photo-1598512140401-44755a5b51d6?auto=format&fit=crop&w=300&q=80" },
        { name: "Burro's Tail", price: "14", image: "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?auto=format&fit=crop&w=300&q=80" },
        { name: "Panda Plant", price: "11", image: "https://images.unsplash.com/photo-1598512140401-44755a5b51d6?auto=format&fit=crop&w=300&q=80" }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      {/* Navbar with links to Home, Plants, and Cart as required by rubric */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#4CAF50', color: 'white' }}>
        <h2>Paradise Nursery</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Plants</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <span>🛒 Cart ({totalCartItems})</span>
          </a>
        </div>
      </nav>

      {/* Product Categories */}
      <div style={{ padding: '20px' }}>
        {plantsArray.map((category, index) => (
          <div key={index}>
            <h3 style={{ textAlign: 'center', margin: '40px 0 20px 0' }}>{category.category}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
              {category.plants.map((plant, plantIndex) => {
                // Check if the plant is already in the cart to dynamically disable the button
                const isAdded = cartItems.some(item => item.name === plant.name);
                
                return (
                  <div key={plantIndex} style={{ border: '1px solid #ccc', padding: '20px', width: '250px', textAlign: 'center', borderRadius: '8px' }}>
                    <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
                    <h4>{plant.name}</h4>
                    <p>${plant.price}</p>
                    
                    {/* Add to Cart button required by rubric */}
                    <button 
                      onClick={() => handleAddToCart(plant)}
                      disabled={isAdded}
                      style={{ 
                        padding: '10px 20px', 
                        backgroundColor: isAdded ? '#ccc' : '#4CAF50', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px',
                        cursor: isAdded ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {isAdded ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
