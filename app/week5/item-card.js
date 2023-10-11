import React from 'react';

export default function ItemCard({ item }) {
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {item.id}
      </td>
      <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {item.name}
      </td>
      <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {item.quantity}
      </td>
      <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {item.category}
      </td>
    </tr>
  );
}
