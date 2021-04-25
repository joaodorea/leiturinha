import React, { useContext, useEffect, useState } from 'react'

import { AppContext } from '@/state/context'
import Product from '@/models/Product'
import utils from '@/utils/index'
import ProductsOrder from '@/models/ProductsOrder'

interface OrderSummaryProps {
  products: Product[]
  order: ProductsOrder[]
}

const OrderSummary = (props: OrderSummaryProps) => {
  const [ context, setContext ] = useContext(AppContext)
  const [ total, setTotal ] = useState(context.total)

  useEffect(() => {
    const newTotal = props.order.reduce((init: number, actual: ProductsOrder): number => {
      const product = props.products.find(p => p.id === actual.product_id)
      init += product.price * actual.quantity

      return init
    }, 0)

    setTotal(newTotal)
  }, [props.order])

  const goToPayment = (): void => {
    setContext({ ...context, step: 'payment', total })
  }

  return (
    <aside>
      <ul>
        {props.order.map(item => {
          const product: Product = props.products.find(p => p.id === item.product_id)

          return <li key={product.id}>{item.quantity}x {product.name}</li>
        })}
      </ul>

      <h2>Total {utils.formatMoney(total)}</h2>
      <button disabled={!props.order.length} onClick={goToPayment}>Choose Payment Option</button>
    </aside>
  )
}

export default OrderSummary