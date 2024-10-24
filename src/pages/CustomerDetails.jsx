import React from 'react';
import { useParams, Link } from 'react-router-dom';

// This is dummy data. In a real application, you'd fetch this from an API.
const customerData = {
  '23143': { id: '23143', name: 'Shirley A. Lape', email: 'shirley@example.com', phone: '(555) 555-1234', address: 'Cottage Grove, OR 97424' },
  '65345': { id: '65345', name: 'Mason Nash', email: 'mason@example.com', phone: '(555) 555-5678', address: 'Westminster, CA 92683' },
  // Add more customer data as needed
};

export default function CustomerDetails() {
  const { id } = useParams();
  const customer = customerData[id];

  if (!customer) {
    return <div>Customer not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/orders" className="text-blue-500 hover:text-blue-600 mb-4 inline-block">&larr; Back to Orders</Link>
      <h1 className="text-2xl font-semibold mb-4">Customer Details</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {customer.name}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Customer ID: {customer.id}
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{customer.email}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Phone number</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{customer.phone}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{customer.address}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
