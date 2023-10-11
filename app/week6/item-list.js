import React, { useState } from "react";
import Heading from "./heading";
import ItemCard from "./item-card";

export default function ItemList({ items }) {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [itemNameFilter, setItemNameFilter] = useState("");
  const [isGrouped, setIsGrouped] = useState(false);

  // Create a copy of items to avoid mutation
  let filteredItems = [...items];

  // Filter the items based on the category if the filter isn't "All"
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
  let categories = [...new Set(items.map((item) => item.category))].sort();

  return (
    <>
      <div className="flex space-x-4 items-center">
        {/* Category filter */}
        <div className="flex-grow">
          <label htmlFor="category" className="self-center">
            Filter by category:
          </label>
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
        </div>

        {/* Item name filter */}
        <div className="flex-grow">
          <label htmlFor="itemName" className="self-center">
            Filter by item name:
          </label>
          <input
            id="itemName"
            type="text"
            value={itemNameFilter}
            onChange={(e) => setItemNameFilter(e.target.value)}
            placeholder="Enter item name..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-m rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        {/* Toggle Button */}
        <div className="flex-grow">
          <label className="relative inline-flex items-center cursor-pointer w-full">
            <input
              type="checkbox"
              className="sr-only peer"
              onChange={() => setIsGrouped(!isGrouped)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Group by Category
            </span>
          </label>
        </div>
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
          {isGrouped ? (
            Object.entries(
              filteredItems.reduce((acc, item) => {
                acc[item.category] = acc[item.category] || [];
                acc[item.category].push(item);
                return acc;
              }, {})
            )
              .sort(([aKey], [bKey]) => aKey.localeCompare(bKey))
              .map(([category, items]) => (
                <React.Fragment key={category}>
                  <tr>
                    <td
                      colSpan="4"
                      className="capitalize text-xl font-bold bg-gray-200"
                    >
                      {category}
                    </td>
                  </tr>
                  {items
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((item) => (
                      <ItemCard item={item} key={item.name} />
                    ))}
                </React.Fragment>
              ))
          ) : filteredItems.length === 0 ? ( // Ensure this line is not empty
            <tr>
              <td colSpan="4" className="text-center py-4">
                No items found.
              </td>
            </tr>
          ) : (
            filteredItems.map((item) => (
              <ItemCard item={item} key={item.name} />
            ))
          )}
        </tbody>
      </table>
    </>
  );
}
