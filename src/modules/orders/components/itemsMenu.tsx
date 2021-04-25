import React, { useContext, useEffect, useState } from 'react'

import Product from '@/models/Product'
import ProductsOrder from '@/models/ProductsOrder'
import ItemSingle from './itemSingle'
import { AppContext } from '@/state/context'

interface ItemsMenuProps {
  products: Product[]
  updateOrder: (products: ProductsOrder[]) => void
}

const ItemsMenu = (props: ItemsMenuProps) => {
  const [ context ] = useContext(AppContext)
  const [ productsOrder, setProducts ] = useState<ProductsOrder[]>(context.order)

  useEffect(() => props.updateOrder(productsOrder), [productsOrder])

  const addItem = (id: number): void => {
    const item = productsOrder.find(product => product.product_id === id)
    
    if(!item) {
      const product: Product = props.products.find(prod => prod.id === id)
      setProducts([...productsOrder, { product_id: id, quantity: 1, name: product.name }])
      return
    }

    const updatedList = productsOrder.map(item => {
      if(item.product_id === id)
        item.quantity++
      return item
    })
    
    setProducts(updatedList)
  }

  const removeItem = (id: number): void => {
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
            <ItemSingle key={product.id} addItem={addItem} removeItem={removeItem} product={product}>
              { order ? order.quantity : 0 }
            </ItemSingle>
          )
        })}
      </ul>
      
      <ul>
        {drinks.map((product) => {
          const order: ProductsOrder = productsOrder.find(item => item.product_id === product.id)

          return (
            <ItemSingle key={product.id} addItem={addItem} removeItem={removeItem} product={product}>
              { order ? order.quantity : 0 }
            </ItemSingle>
          )
        })}
      </ul>
    </section>
  )
}

export default ItemsMenu
