export function getOrderStatus(status) {
  switch (status) {
    case 'PLACED':
      return { text: 'Placed', color: 'bg-purple-100 text-purple-800 border border-purple-300' };
    case 'CONFIRMED':
      return { text: 'Confirmed', color: 'bg-blue-100 text-blue-800 border border-blue-300' };
    case 'SHIPPED':
      return { text: 'Shipped', color: 'bg-yellow-100 text-yellow-800 border border-yellow-300' };
    case 'OUT_FOR_DELIVERY':
      return { text: 'Out for Delivery', color: 'bg-orange-100 text-orange-800 border border-orange-300' };
    case 'DELIVERED':
      return { text: 'Delivered', color: 'bg-green-100 text-green-800 border border-green-300' };
    default:
      return { text: 'Unknown', color: 'bg-gray-100 text-gray-800 border border-gray-300' };
  }
}
