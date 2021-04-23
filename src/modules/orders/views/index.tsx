import React from 'react'
import productsList from '@/assets/mocks/products.json'
import Product from 'src/domain/Product'

const Orders: React.FC = () => {
  const products: Product[] = productsList as Product[]
  
  return (
    <ul>
      { products.map( (product) => <li key={product.id}>{ product.name }</li>) }
    </ul>
  )
}

export default Orders