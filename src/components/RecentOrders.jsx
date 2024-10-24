import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { getOrderStatus } from "../lib/orderStatus";
import { FiPackage, FiCheck, FiTruck, FiHome, FiAlertCircle } from 'react-icons/fi';

const recentOrderData = [
  {
    id: "1",
    product_id: "4324",
    customer_id: "23143",
    customer_name: "Shirley A. Lape",
    order_date: "2022-05-17T03:24:00",
    order_total: "$435.50",
    current_order_status: "PLACED",
    shipment_address: "Cottage Grove, OR 97424",
  },

  {
    id: "2",
    product_id: "5434",
    customer_id: "65345",
    customer_name: "Mason Nash",
    order_date: "2022-05-17T07:14:00",
    order_total: "$836.44",
    current_order_status: "SHIPPED",
    shipment_address: "Westminster, CA 92683",
  },
  {
    id: "3",
    product_id: "9854",
    customer_id: "87832",
    customer_name: "Luke Parkin",
    order_date: "2022-05-16T12:40:00",
    order_total: "$334.50",
    current_order_status: "SHIPPED",
    shipment_address: "San Mateo, CA 94403",
  },
  {
    id: "4",
    product_id: "8763",
    customer_id: "09832",
    customer_name: "Anthony Fry",
    order_date: "2022-05-14T03:24:00",
    order_total: "$876.00",
    current_order_status: "OUT_FOR_DELIVERY",
    shipment_address: "San Mateo, CA 94403",
  },
  {
    id: "5",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "6",
    product_id: "7453",
    customer_id: "96453",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "CONFIRMED",
    shipment_address: "Los Angeles, CA 90017",
  },
];

const getStatusIcon = (status) => {
  switch (status) {
    case 'PLACED': return <FiPackage className="mr-2" />;
    case 'CONFIRMED': return <FiCheck className="mr-2" />;
    case 'SHIPPED': return <FiTruck className="mr-2" />;
    case 'OUT_FOR_DELIVERY': return <FiTruck className="mr-2" />;
    case 'DELIVERED': return <FiHome className="mr-2" />;
    default: return <FiAlertCircle className="mr-2" />;
  }
};

export default function RecentOrders() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Recent Orders</strong>
      <div className="mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-100 text-left">ID</th>
              <th className="py-2 px-4 bg-gray-100 text-left">Product ID</th>
              <th className="py-2 px-4 bg-gray-100 text-left">Customer Name</th>
              <th className="py-2 px-4 bg-gray-100 text-left">Order Date</th>
              <th className="py-2 px-4 bg-gray-100 text-left">Order Total</th>
              <th className="py-2 px-4 bg-gray-100 text-left">Shipping Address</th>
              <th className="py-2 px-4 bg-gray-100 text-left">Order Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map((order) => (
              <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-2 px-4">
                  <Link to={`/order/${order.id}`} className="text-blue-500 hover:text-blue-600">#{order.id}</Link>
                </td>
                <td className="py-2 px-4">
                  <Link to={`/product/${order.product_id}`} className="text-blue-500 hover:text-blue-600">
                    #{order.product_id}
                  </Link>
                </td>
                <td className="py-2 px-4">
                  <Link to={`/customer/${order.customer_id}`} className="text-blue-500 hover:text-blue-600">
                    {order.customer_name}
                  </Link>
                </td>
                <td className="py-2 px-4">{format(new Date(order.order_date), "dd MMM yyyy")}</td>
                <td className="py-2 px-4">{order.order_total}</td>
                <td className="py-2 px-4">{order.shipment_address}</td>
                <td className="py-2 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs flex items-center w-fit ${getOrderStatus(order.current_order_status).color}`}>
                    {getStatusIcon(order.current_order_status)}
                    {getOrderStatus(order.current_order_status).text}
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
