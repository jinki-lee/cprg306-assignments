"use client";
import React, { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [category, setCategory] = useState("Produce");
  const [showAlert, setShowAlert] = useState(false);
  const [addedItem, setAddedItem] = useState(null); // New state variable

  const handleSubmit = (event) => {
    event.preventDefault();
   
    // Create item object
    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };
  
    // Log item object to the console
    console.log(item);
  
    // Store item details in state
    setAddedItem(item);
  
    // Display the alert
    setShowAlert(true);
  
    // Reset state variables to their initial values
    setName("");
    setQuantity("1");
    setCategory("Produce");
  
    // Set a timer to hide the alert after 3000 milliseconds (3 seconds)
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };


  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <section className="dark:bg-gray-900">
      {/* Alert Message */}
      <div className="absolute top-0 right-0 m-4">
        {showAlert && (
          <div
            id="toast-message-cta"
            className="p-4 text-gray-800 bg-blue-200 rounded-lg shadow dark:bg-blue-800 dark:text-gray-400"
            role="alert"
          >
            <div className="flex">
              <div className="ml-3 text-sm font-normal">
                <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                  Product Added
                </span>
                {addedItem && (
                  <div className="mb-2 text-sm font-normal">{`Name: ${addedItem.name}, Quantity: ${addedItem.quantity}, Category: ${addedItem.category}`}</div>
                )}
              </div>
              <button
                type="button"
                onClick={closeAlert}
                className="ml-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Form */}
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new product
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center sm:items-start w-full max-w-2xl"
        >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 w-full">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <input
                required
                onChange={handleNameChange}
                value={name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="quantity"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Quantity
              </label>
              <input
  type="number"
  id="quantity"
  name="quantity"
  min="1"
  max="99"
  value={quantity}
  onChange={handleQuantityChange}
  required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <select
                required
                onChange={handleCategoryChange}
                value={category}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="sm:col-span-2 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 bg-blue-500 hover:bg-blue-700 ml-auto"
              >
                Add product
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
