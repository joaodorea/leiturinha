import ProductsOrder from '@/models/ProductsOrder'
import React from 'react'

type PaymentOrderProps = {
  order: ProductsOrder[]
  total: string
}

const PaymentOrder = (props: PaymentOrderProps) => {
  return (
    <aside className="payment-order">
      {/* <h2>{ customerName }'s order</h2> */}
      <ul>
        { props.order.map( item => {
          return <li className="item" key={item.product_id}>
            <span className="item-name">{item.name}</span> <span className="item-quantity">x{item.quantity}</span>
          </li>
        })}
      </ul>

      <h3 className="payment-total">Total <span className="price">{props.total}</span></h3>
    </aside>
  )
}

export default PaymentOrder