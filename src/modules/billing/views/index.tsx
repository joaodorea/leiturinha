import React, { useContext } from 'react'

import PaymentForm from '../components/PaymentForm'
import PaymentOrder from '../components/PaymentOrder'
import { AppContext } from '@/state/context'
import utils from '@/utils/index'

import '@/assets/styles/billing.scss'

const Billing = () => {
  const [ context, setContext ] = useContext(AppContext)

  const goToOrders = (): void => {
    setContext({ ...context, step: 'orders' })
  }

  return (
    <section className="billing">
      <h1 className="title">Payment Options</h1>

      <PaymentForm>
        <button className="btn">Pay {utils.formatMoney(context.total)}</button>
      </PaymentForm>

      <PaymentOrder total={utils.formatMoney(context.total)} order={context.order} />

      <button onClick={goToOrders}>Back</button>
    </section>
  )
}

export default Billing