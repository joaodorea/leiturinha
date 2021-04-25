import React from 'react'

const PaymentForm = (props) => {
  return (
    <form>
      <label>
        Card Number*
          <input className="form-input" type="text" name="card-number" id="card-number" />
      </label>

      <label>
        Name on Card*
          <input className="form-input" type="text" name="name-card" id="name-card" />
      </label>

      <label>
        Exp Month*
          <input className="form-input" type="text" name="exp-month" id="exp-month" />
      </label>

      <label>
        Exp Year*
          <input className="form-input" type="text" name="exp-year" id="exp-year" />
      </label>

      <label>
        CVV Number**
          <input className="form-input" type="text" name="cvv-number" id="cvv-number" />
      </label>

      <label>
        <input type="checkbox" name="agree" id="agree" />
          I agree to the <u>Term & Conditions</u> and <u>Privacy Policy</u>.
      </label>

      { props.children}
    </form>
  )
}

export default PaymentForm