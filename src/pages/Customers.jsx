import React, { useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

// Dummy data for customers
const initialCustomers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', totalOrders: 5, totalSpent: 500 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', totalOrders: 3, totalSpent: 300 },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', totalOrders: 7, totalSpent: 750 },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', totalOrders: 2, totalSpent: 150 },
  { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', totalOrders: 4, totalSpent: 400 },
];

export default function Customers() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id) => {
    setCustomers(customers.filter(customer => customer.id !== id));
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Customers</h1>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search customers..."
          className="w-full px-3 py-2 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-center">Total Orders</th>
              <th className="py-3 px-6 text-center">Total Spent</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {filteredCustomers.map((customer) => (
              <tr key={customer.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="font-medium">{customer.name}</div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div>{customer.email}</div>
                </td>
                <td className="py-3 px-6 text-center">
                  {customer.totalOrders}
                </td>
                <td className="py-3 px-6 text-center">
                  ${customer.totalSpent}
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <FiEdit />
                    </button>
                    <button 
                      className="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
                      onClick={() => handleDelete(customer.id)}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
