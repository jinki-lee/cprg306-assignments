"use client";

import React, { useState } from 'react';
import NewItem from './shopping-list/new-item';
import ItemList from './shopping-list/item-list';
import MealIdeas from './shopping-list/meal-ideas';
import itemsData from './shopping-list/items.json';
import Login from './login';
import { useUserAuth } from './_utils/auth-context';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');
  const { user, firebaseSignOut } = useUserAuth();

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName.split(',')[0].trim().replace(/[^\w\s]/gi, ''); // Remove size, emojis, and any special characters
    setSelectedItemName(cleanedName);
  };

  if (!user) {
    // If the user is not logged in, show the Login component
    return <Login />;
  }

  // User is logged in, display the main content and welcome message
  return (
<main>
  <div style={{ 
    textAlign: 'right', // Aligns text to the right
    paddingRight: '20px', // Adds some space on the right
  }}>
    <p>Welcome, {user.displayName}
    <br />
    ({user.email})</p>
    <br />
    <button 
      onClick={() => firebaseSignOut()}
      style={{ 
        backgroundColor: 'transparent', // Transparent background
        color: 'red', // Red text color
        cursor: 'pointer', // Changes the cursor on hover
        border: '2px solid red', // Red border
        padding: '10px 20px', // Adds padding for a bigger click area
        borderRadius: '5px', // Rounded corners
        transition: 'all 0.3s', // Smooth transition for color and background
        outline: 'none', // Removes the outline on focus
      }}
      onMouseOver={e => {
        e.target.style.backgroundColor = 'red'; // Red background on hover
        e.target.style.color = 'white'; // White text on hover
      }}
      onMouseOut={e => {
        e.target.style.backgroundColor = 'transparent'; // Transparent background when not hovered
        e.target.style.color = 'red'; // Red text when not hovered
      }}
    >
      Sign out
    </button>
  </div>
  <NewItem onAddItem={handleAddItem} />
  <ItemList items={items} onItemSelect={handleItemSelect} />
  <MealIdeas ingredient={selectedItemName} />
</main>


  );
}
