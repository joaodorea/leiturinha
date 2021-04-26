import React, { useContext } from 'react'

import PaymentForm, { FormFields } from '../components/PaymentForm'
import PaymentOrder from '../components/PaymentOrder'
import { AppContext } from '@/state/context'
import utils from '@/utils/index'

import '@/assets/styles/billing.scss'

const Billing = () => {
  const [ context, setContext ] = useContext(AppContext)

  const goToOrders = (): void => {
    setContext({ ...context, step: 'order' })
  }

  const submitForm = (formFields: FormFields): void => {
    alert(`Congratulations ${formFields.cardName}! Successful payment!`)
    goToOrders()
  }

  return (
    <section className="billing">
      <h1 className="title">Payment Options</h1>

      <PaymentForm submitForm={submitForm}>
        Pay {utils.formatMoney(context.total)}
      </PaymentForm>

      <PaymentOrder total={utils.formatMoney(context.total)} order={context.order} />

      <span className="back-button" onClick={goToOrders}>Back to orders page</span>
    </section>
  )
}

export default Billing