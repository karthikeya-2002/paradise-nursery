// src/CartItem.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './App.css';

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  
  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price);
      return total + (itemPrice * item.quantity);
    }, 0).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  return (
    <div className="cart-container" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      
      <div>
        {cartItems.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #ccc', padding: '20px 0' }}>
            <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px', marginRight: '20px' }} />
            
            <div style={{ flex: 1 }}>
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price}</p>
              {/* Total cost for this specific plant type */}
              <p><strong>Subtotal: ${(parseFloat(item.price) * item.quantity).toFixed(2)}</strong></p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div>
                <button onClick={() => handleDecrement(item)} style={{ padding: '5px 10px', fontSize: '16px', cursor: 'pointer' }}>-</button>
                <span style={{ padding: '0 15px', fontSize: '18px' }}>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)} style={{ padding: '5px 10px', fontSize: '16px', cursor: 'pointer' }}>+</button>
              </div>
              <button 
                onClick={() => handleRemove(item)} 
                style={{ padding: '8px 15px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
        <button 
          onClick={onContinueShopping}
          style={{ padding: '15px 30px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}
        >
          Continue Shopping
        </button>
        <button 
          onClick={handleCheckout}
          style={{ padding: '15px 30px', backgroundColor: '#FF9800', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
