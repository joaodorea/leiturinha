import ProductsOrder from '@/models/ProductsOrder'
import React from 'react'

type PaymentOrderProps = {
  order: ProductsOrder[]
  total: string
}

const PaymentOrder = (props: PaymentOrderProps) => {
  return (
    <aside>
      {/* <h2>{ customerName }'s order</h2> */}
      <ul>
        { props.order.map( item => {
          return <li key={item.product_id}>{item.name} <span>{item.quantity}</span></li>
        })}
      </ul>

      <h3>Total <span className="price">{props.total}</span></h3>
    </aside>
  )
}

export default PaymentOrder