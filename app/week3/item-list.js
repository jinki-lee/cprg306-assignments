import React from 'react';
import ItemCard from './item';
import Heading from './heading';

export default function EventList() {
  const items = [
    {
      image: "🥛",
      name: "Milk, 4 L",
      quantity: 1,
      category: "dairy",
    },
    {
      image: "🍞",
      name: "Bread",
      quantity: 2,
      category: "bakery",
    },
    {
      image: "🥚",
      name: "Eggs, dozen",
      quantity: 2,
      category: "dairy",
    },
    {
      image: "🍌",
      name: "Bananas",
      quantity: 6,
      category: "produce",
    },
    {
      image: "🥦",
      name: "Broccoli",
      quantity: 3,
      category: "produce",
    },
    {
      image: "🍗",
      name: "Chicken breasts, 1 kg",
      quantity: 1,
      category: "meat",
    },
    {
      image: "🍝",
      name: "Pasta sauce",
      quantity: 3,
      category: "canned goods",
    },
    {
      image: "🍝",
      name: "Spaghetti, 454 g",
      quantity: 2,
      category: "dry goods",
    },
    {
      image: "🧻",
      name: "Toilet paper, 12 pack",
      quantity: 1,
      category: "household",
    },
    {
      image: "🧻",
      name: "Paper towels, 6 pack",
      quantity: 1,
      category: "household",
    },
    {
      image: "🍽️",
      name: "Dish soap",
      quantity: 1,
      category: "household",
    },
    {
      image: "🧼",
      name: "Hand soap",
      quantity: 4,
      category: "household",
    },
  ];
  
  
  return (
    <>
      <Heading title="Shopping List" />
  
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 font-semibold text-left"></th>
            <th className="py-2 px-4 font-semibold text-left">Name</th>
            <th className="py-2 px-4 font-semibold text-left">Quantity</th>
            <th className="py-2 px-4 font-semibold text-left">Category</th>
            <th className="py-2 px-4 font-semibold text-left">Edit</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over the items and render an ItemCard for each item */}
          {items.map((item, index) => (
            <ItemCard
              key={index} // Make sure to provide a unique key for each item
              image={item.image}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </tbody>
      </table>
    </>
  );
  
}
