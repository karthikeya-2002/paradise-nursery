// src/App.jsx
import React, { useState } from 'react';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  // State to manage which page we are viewing
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <div className="App">
      {/* This conditional rendering checks if showProducts is false. 
        If it is, it shows the Landing Page. If true, it will eventually show the Product List.
      */}
      {!showProducts ? (
        <div className="landing-page">
          {/* Company Name required by rubric */}
          <h1>Paradise Nursery</h1>
          <p>Bring Nature Home. Purify your space, elevate your mood.</p>
          
          {/* Get Started button required by rubric */}
          <button className="get-started-btn" onClick={handleGetStarted}>
            Get Started
          </button>
          
          <AboutUs />
        </div>
      ) : (
        // We will build this component in a later step!
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Product Listing Page Coming Next!</h2>
        </div>
      )}
    </div>
  );
}

export default App;
