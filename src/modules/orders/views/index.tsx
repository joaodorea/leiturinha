import React, { useContext, useEffect, useState } from 'react'
import Product from '@/models/Product'
import ProductsOrder from '@/models/ProductsOrder'

import { AppContext } from '@/state/context'
import ItemsMenu from '../components/itemsMenu'
import productsList from '@/assets/mocks/products.json'
import OrderSummary from '../components/orderSummary'

const Orders: React.FC = () => {
  const products: Product[] = productsList as Product[]
  const [ context, setContext ] = useContext(AppContext)
  const [ order, setOrder ] = useState<ProductsOrder[]>(context.order)

  useEffect(() => setContext({ ...context, order }), [ order ])
  
  return (
    <section>
      <ItemsMenu updateOrder={setOrder} products={products} />
      <OrderSummary order={order} products={products} />
    </section>
  )
}

export default Orders