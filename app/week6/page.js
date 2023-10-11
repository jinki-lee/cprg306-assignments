"use client";

import React, { useState } from "react";
import NewItem from "./new-item.js";
import ItemList from "./item-list";
import itemsData from "./items.json"; // Import the data from items.json

export default function Page() {
  const [items, setItems] = useState(itemsData); // Initialize items with data from items.json

  // Create an event handler to add a new item to the items state
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main>
      {/* Pass the handleAddItem event handler to NewItem */}
      <NewItem onAddItem={handleAddItem} />

      {/* Pass the items state to ItemList */}
      <ItemList items={items} />
    </main>
  );
}
