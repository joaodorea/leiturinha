import React, { useState } from 'react'
import Product from '@/models/Product'
import ProductsOrder from '@/models/ProductsOrder'

import ItemsMenu from '../components/itemsMenu'
import productsList from '@/assets/mocks/products.json'

const Orders: React.FC = () => {
  const [ order, setOrder ] = useState<ProductsOrder[]>([])
  const products: Product[] = productsList as Product[]
  
  return (
    <>
      <ItemsMenu updateOrder={setOrder} products={products} />

      <ul>
        {order.map( item => {
          const product: Product = products.find(p => p.id === item.product_id)

          return <li key={product.id}>{item.quantity}x {product.name}</li>
        })}
      </ul>
    </>
  )
}

export default Orders