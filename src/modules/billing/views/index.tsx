import React, { useContext } from 'react'

import { AppContext } from '@/state/context'
import PaymentForm from '../components/PaymentForm'
import utils from '@/utils/index'

const Billing = () => {
  const [ context, setContext ] = useContext(AppContext)

  const goToOrders = (): void => {
    setContext({ ...context, step: 'orders' })
  }

  return (
    <section>
      <h1>Payment Options</h1>

      <PaymentForm>
        <button className="btn">Pay {utils.formatMoney(context.total)}</button>
      </PaymentForm>

      <button onClick={goToOrders}>Back</button>
    </section>
  )
}

export default Billing