import React, { useContext, useEffect, useState } from 'react'
import Product from '@/models/Product'
import ProductsOrder from '@/models/ProductsOrder'

import { AppContext } from '@/state/context'
import ItemsMenu from '../components/itemsMenu'
import productsList from '@/assets/mocks/products.json'
import utils from '@/utils/index'

const Orders: React.FC = () => {
  const products: Product[] = productsList as Product[]
  const [ context, setContext ] = useContext(AppContext)
  const [ order, setOrder ] = useState<ProductsOrder[]>(context.order)
  const [ total, setTotal ] = useState(context.total)

  useEffect(() => {
    setTotal(() => order.reduce((init: number, actual: ProductsOrder): number => {
      const product = products.find(p => p.id === actual.product_id)
      init += product.price * actual.quantity

      return init
    }, 0))

    setContext({ order, total })
  }, [ order ])
  
  return (
    <>
      <ItemsMenu updateOrder={setOrder} products={products} />

      <ul>
        {order.map( item => {
          const product: Product = products.find(p => p.id === item.product_id)

          return <li key={product.id}>{item.quantity}x {product.name}</li>
        })}
      </ul>

      <h2>Total {utils.formatMoney(total)}</h2>
      <button disabled={!order.length}>Choose Payment Option</button>
    </>
  )
}

export default Orders