import React from 'react'

import Product from '@/models/Product'
import utils from '@/utils/index'

interface ItemSingleProps {
  product: Product
  children: number
  removeItem: (id: number) => void
  addItem: (id: number) => void
}

const ItemSingle = (props: ItemSingleProps) => {
  return (
    <li className="item" key={props.product.id}>
      <span>
        <span onClick={() => props.removeItem(props.product.id)}>-</span>
        <span>{ props.children }</span>
        <span onClick={() => props.addItem(props.product.id)}>+</span>
      </span>

      <span className="item-name">{props.product.name}</span>

      <span className="item-price">{utils.formatMoney(props.product.price)}</span>
    </li>
  )
}

export default ItemSingle