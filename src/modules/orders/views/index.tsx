import React, { useContext, useEffect, useState } from 'react'
import Product from '@/models/Product'
import ProductsOrder from '@/models/ProductsOrder'

import { AppContext } from '@/state/context'
import getProdutcs from '@/adapters/fetchproducts'
import ItemsMenu from '../components/itemsMenu'
import OrderSummary from '../components/orderSummary'

import '@/assets/styles/orders.scss'

const Orders: React.FC = () => {
  const [context, setContext] = useContext(AppContext)
  const [products, setProducts] = useState<Product[]>(context.products)
  const [order, setOrder] = useState<ProductsOrder[]>(context.order)

  useEffect(() => setContext({ ...context, order }), [ order ])
  
  useEffect((): void => {
    if(context.products.length) return

    (async () => {
      try {
        const res: Product[] = await getProdutcs()
        setProducts(res)
        setContext({...context, products: res})
      } catch (error) {
        alert('Oops! Something went wrong! Try again later.')
      }
    })()
  }, [])
  
  return (
    <section className="orders">
      <ItemsMenu updateOrder={setOrder} products={products} />
      <OrderSummary order={order} products={products} />
    </section>
  )
}

export default Orders