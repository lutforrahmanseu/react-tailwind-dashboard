import classNames from 'classnames'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const popularProducts = [
	{
		id: '3432',
		product_name: 'Macbook M1 Pro 14"',
		product_thumbnail: 'https://computermania-bd.b-cdn.net/wp-content/uploads/Macbook-Pro-M1-Chip-3-1.png',
		product_price: '$1499.00',
		product_stock: 341
	},
	{
		id: '7633',
		product_name: 'Samsung Galaxy Buds 2',
		product_thumbnail: 'https://www.gadstyle.com/wp-content/uploads/2021/08/samsung-galaxy-buds-2-2-1.jpg',
		product_price: '$399.00',
		product_stock: 24
	},
	{
		id: '6534',
		product_name: 'Asus Zenbook Pro',
		product_thumbnail: 'https://ryans.com/storage/products/main/asus-zenbook-pro-16x-oled-ux7602zm-intel-core-i9-11711253884.webp',
		product_price: '$899.00',
		product_stock: 56
	},
	{
		id: '9234',
		product_name: 'LG Flex Canvas',
		product_thumbnail: 'https://www.courts.com.sg/media/catalog/product/i/p/ip181363_00.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=770&width=770&canvas=770:770',
		product_price: '$499.00',
		product_stock: 98
	},
	{
		id: '4314',
		product_name: 'Apple Magic Touchpad',
		product_thumbnail: 'https://www.custommacbd.com/cdn/shop/products/MK2D3_AV2.jpg?v=1641504109',
		product_price: '$699.00',
		product_stock: 0
	},
	{
		id: '4342',
		product_name: 'Nothing Earbuds One',
		product_thumbnail: 'https://www.dakhm.com/wp-content/uploads/2022/01/Nothing-ear-1-True-Wireless-Earbuds-White.jpg',
		product_price: '$399.00',
		product_stock: 453
	}
]

function PopularProducts() {
	const navigate = useNavigate();

	const handleProductClick = (product) => {
		navigate(`/product/${product.id}`, { state: { product } });
	};

	return (
		<div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
			<strong className="text-gray-700 font-medium">Popular Products</strong>
			<div className="mt-4 flex flex-col gap-3">
				{popularProducts.map((product) => (
					<div
						key={product.id}
						onClick={() => handleProductClick(product)}
						className="flex items-start hover:no-underline cursor-pointer"
					>
						<div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
							<img
								className="w-full h-full object-cover rounded-sm"
								src={product.product_thumbnail}
								alt={product.product_name}
							/>
						</div>
						<div className="ml-4 flex-1">
							<p className="text-sm text-gray-800">{product.product_name}</p>
							<span
								className={classNames(
									product.product_stock === 0
										? 'text-red-500'
										: product.product_stock > 50
										? 'text-green-500'
										: 'text-orange-500',
									'text-xs font-medium'
								)}
							>
								{product.product_stock === 0 ? 'Out of Stock' : product.product_stock + ' in Stock'}
							</span>
						</div>
						<div className="text-xs text-gray-400 pl-1.5">{product.product_price}</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default PopularProducts
