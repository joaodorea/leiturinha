import React, { useContext } from 'react'

import { AppContext } from '@/state/context'

const Billing = () => {
  const [ context, setContext ] = useContext(AppContext)

  const goToOrders = (): void => {
    setContext({ ...context, step: 'orders' })
  }

  return (
    <div>
      <h1>Payment Options</h1>
      <button onClick={goToOrders}>Back</button>
    </div>
  )
}

export default Billing