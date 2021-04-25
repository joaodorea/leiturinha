import React, { useState } from 'react'

import Product from '@/models/Product'

type ItemsMenuProps = {
  products: Product[]
}

type ProductsOrder = {
  product_id: number
  quantity: number
}

const ItemsMenu = (props: ItemsMenuProps) => {
  const [ productsOrder, setProducts ] = useState<ProductsOrder[]>([])

  const addItem = (id: number) => {
    const item = productsOrder.find(product => product.product_id === id)
    
    if(!item)
      return setProducts([...productsOrder, { product_id: id, quantity: 1 }])

    const updatedList = productsOrder.map(item => {
      if(item.product_id === id)
        item.quantity++
      return item
    })
    setProducts(updatedList)
  }

  const removeItem = (id: number) => {
    const item = productsOrder.find(product => product.product_id === id)
    if(!item) return

    else if(item.quantity === 1)
      setProducts((products) => 
        products.filter(product => product.product_id !== id)
      )

    else
      setProducts((products) => 
        products.map(product => {
          if(product.product_id === id)
            product.quantity--

          return product
        })
      )

  }

  const foods: Product[] = props.products.filter(prod => prod.category === 'food')
  const drinks: Product[] = props.products.filter(prod => prod.category === 'drink')

  return (
    <section>
      <ul>
        {foods.map((product) => {
          const order: ProductsOrder = productsOrder.find(item => item.product_id === product.id)

          return (
            <li className="item" key={product.id}>
              <span>
                <span onClick={() => removeItem(product.id)}>-</span>
                <span>{ order ? order.quantity : 0 }</span>
                <span onClick={() => addItem(product.id)}>+</span>
              </span>

              <span className="item-name">{product.name}</span>

              <span className="item-price">{product.price}</span>
            </li>
          )
        })}
      </ul>
      
      <ul>
        {drinks.map((product) => {
          const order: ProductsOrder = productsOrder.find(item => item.product_id === product.id)

          return (
            <li className="item" key={product.id}>
              <span>
                <span onClick={() => removeItem(product.id)}>-</span>
                <span>{ order ? order.quantity : 0 }</span>
                <span onClick={() => addItem(product.id)}>+</span>
              </span>

              <span className="item-name">{product.name}</span>

              <span className="item-price">{product.price}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ItemsMenu
