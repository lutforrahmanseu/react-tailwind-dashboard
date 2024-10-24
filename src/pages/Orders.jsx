import React, { useState } from 'react';
import { format } from 'date-fns';
import { FiSearch, FiPackage, FiCheck, FiTruck, FiHome, FiAlertCircle } from 'react-icons/fi';


// Dummy data for orders
const initialOrders = [
  {
    id: "1",
    product_id: "4324",
    customer_name: "Shirley A. Lape",
    order_date: "2023-05-17T03:24:00",
    order_total: "$435.50",
    current_order_status: "PLACED",
    shipment_address: "Cottage Grove, OR 97424",
    order_status_color: "bg-purple-100 text-purple-800 border border-purple-300"
  },
  {
    id: "2",
    product_id: "5434",
    customer_name: "Mason Nash",
    order_date: "2023-05-17T07:14:00",
    order_total: "$836.44",
    current_order_status: "SHIPPED",
    shipment_address: "Westminster, CA 92683",
    order_status_color: "bg-yellow-100 text-yellow-800 border border-yellow-300"
  },
  {
    id: "3",
    product_id: "9854",
    customer_name: "Luke Parkin",
    order_date: "2023-05-16T12:40:00",
    order_total: "$334.50",
    current_order_status: "DELIVERED",
    shipment_address: "San Mateo, CA 94403",
    order_status_color: "bg-green-100 text-green-800 border border-green-300"
  },
  
];

export default function Orders() {
  const [orders, setOrders] = useState(initialOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

 
  const filteredOrders = orders.filter(order => 
    order.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.includes(searchTerm)
  );

 
  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'PLACED': return <FiPackage className="mr-1" />;
      case 'CONFIRMED': return <FiCheck className="mr-1" />;
      case 'SHIPPED': return <FiTruck className="mr-1" />;
      case 'DELIVERED': return <FiHome className="mr-1" />;
      default: return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>
      
      <div className="mb-4 flex items-center">
        <FiSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search orders..."
          className="w-full px-3 py-2 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left cursor-pointer" onClick={() => requestSort('id')}>Order ID</th>
              <th className="py-3 px-6 text-left cursor-pointer" onClick={() => requestSort('product_id')}>Product ID</th>
              <th className="py-3 px-6 text-left cursor-pointer" onClick={() => requestSort('customer_name')}>Customer Name</th>
              <th className="py-3 px-6 text-left cursor-pointer" onClick={() => requestSort('order_date')}>Order Date</th>
              <th className="py-3 px-6 text-left cursor-pointer" onClick={() => requestSort('order_total')}>Order Total</th>
              <th className="py-3 px-6 text-left">Shipping Address</th>
              <th className="py-3 px-6 text-left cursor-pointer" onClick={() => requestSort('current_order_status')}>Order Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {sortedOrders.map((order) => (
              <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="font-medium">{order.id}</div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div>{order.product_id}</div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div>{order.customer_name}</div>
                </td>
                <td className="py-3 px-6 text-left">
                  {format(new Date(order.order_date), "dd MMM yyyy")}
                </td>
                <td className="py-3 px-6 text-left">
                  {order.order_total}
                </td>
                <td className="py-3 px-6 text-left">
                  {order.shipment_address}
                </td>
                <td className="py-3 px-6 text-left">
                  <span className={`px-2 py-1 rounded-full text-xs flex items-center w-fit ${order.order_status_color}`}>
                    {getStatusIcon(order.current_order_status)}
                    {order.current_order_status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
