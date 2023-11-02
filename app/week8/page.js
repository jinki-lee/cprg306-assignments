"use client";

import React, { useState } from 'react';
import NewItem from './shopping-list/new-item';
import ItemList from './shopping-list/item-list';
import MealIdeas from './shopping-list/meal-ideas';
import itemsData from './shopping-list/items.json';
import Login from './Login'; // Make sure to create this component as per the previous example
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
      <div>
        <p>Welcome, {user.displayName} ({user.email})</p>
        <button onClick={() => firebaseSignOut()}>Sign out</button>
      </div>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} onItemSelect={handleItemSelect} />
      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
}
