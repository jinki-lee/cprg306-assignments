"use client";

import React, { useState } from "react";
import NewItem from "./new-item.js";
import ItemList from "./item-list";
import MealIdeas from './meal-ideas'; // Assuming you have this component ready
import itemsData from "./items.json"; // Import the data from items.json

export default function Page() {
  const [items, setItems] = useState(itemsData); // Initialize items with data from items.json
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName.split(',')[0].trim().replace(/[^\w\s]/gi, ''); // Remove size, emojis and any special characters.
    setSelectedItemName(cleanedName);
  };

  return (
    <main>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} onItemSelect={handleItemSelect} />
      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
}
