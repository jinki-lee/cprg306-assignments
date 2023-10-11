"use client";

import React, { useState } from "react";
import Heading from "./heading";
import ItemCard from "./item-card";
import itemsData from "./items.json";

export default function ItemList() {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [itemNameFilter, setItemNameFilter] = useState("");

  // Filter the items based on the category if the filter isn't "All"
  let filteredItems = itemsData;

  if (categoryFilter !== "All") {
    filteredItems = filteredItems.filter(
      (item) => item.category === categoryFilter
    );
  }

  // Filter the items based on the name input
  if (itemNameFilter) {
    filteredItems = filteredItems.filter((item) =>
      item.name.toLowerCase().includes(itemNameFilter.toLowerCase())
    );
  }

  // Extract unique categories for the dropdown list
  let categories = [...new Set(itemsData.map((item) => item.category))].sort();

  return (
    <>
  <div className="flex space-x-4">

        {/* ...[Filtering UI - Select Input] */}
        <label htmlFor="category" className="self-center">Filter by category:</label>

        <select
        id="category"
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-m rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
          <option value="All">All</option>

          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>

        {/* ...[Filtering UI - Search Text] */}
        <label htmlFor="itemName"  className="self-center">Filter by item name:</label>

        <input 
        id="itemName" 
        type="text" 
        value={itemNameFilter}
        onChange={(e) => setItemNameFilter(e.target.value)}
        placeholder="Enter item name..."
        className="bg-gray-50 border border-gray-300 text-gray-900 text-m rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />


      </div>

      <Heading title="Shopping List" />

      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 font-bold text-left text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 bg-gray-50 font-bold text-left text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 bg-gray-50 font-bold text-left text-gray-500 uppercase tracking-wider">
              Quantity
            </th>
            <th className="px-6 py-3 bg-gray-50 font-bold text-left text-gray-500 uppercase tracking-wider">
              Category
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center py-4">
                No items found.
              </td>
            </tr>
          )}
          {filteredItems.map((item) => (
            <ItemCard item={item} key={item.name} />
          ))}
        </tbody>
      </table>
    </>
  );
}
