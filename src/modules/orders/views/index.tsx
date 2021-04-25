import React from 'react'
import Product from '@/models/Product'

import ItemsMenu from '../components/itemsMenu'

import productsList from '@/assets/mocks/products.json'

const Orders: React.FC = () => {
  const products: Product[] = productsList as Product[]
  
  return (
    <ItemsMenu products={products} />
  )
}

export default Orders