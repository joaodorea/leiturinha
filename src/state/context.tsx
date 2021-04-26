import React, { useState, createContext } from 'react'
import ProductsOrder from '@/models/ProductsOrder';
import Product from '@/models/Product';

type steps = 'payment' | 'order'

type IContext = {
  order: ProductsOrder[]
  total: number
  step: steps
  products: Product[]
}

const initState: IContext = {
  order: [],
  total: 0,
  step: 'order',
  products: []
}

interface IAppContext extends Array<IContext | Function> {
  0: IContext
  1: (state: IContext) => void
}

export const AppContext = createContext<IAppContext | null>(null);

export const AppContextProvider = (props) => {
  const [state, dispatch] = useState(initState)

  return <AppContext.Provider value={[state, dispatch]}>{props.children}</AppContext.Provider>
}