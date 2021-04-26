import React, { useRef, useState } from 'react'

export type FormFields = {
  cardNumber: string
  cardName: string
  expMonth: string
  expYear: string
  cvvNumber: string
  agree: boolean
}

const init: FormFields = {
  cardNumber: '',
  cardName: '',
  expMonth: '',
  expYear: '',
  cvvNumber: '',
  agree: false
}

type PaymentFormProps = {
  children: React.ReactNode
  submitForm: (formFields: FormFields) => void
}

const PaymentForm = (props: PaymentFormProps) => {
  const [formFields, setField] = useState<FormFields>(init)
  const [isFormValid, setFormValid] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value, size } = e.currentTarget

    if(value.length > size)
      return

    setField({ ...formFields, [name]: value})
    setFormValid(formRef.current.checkValidity())
  }

  const submit = (e: React.SyntheticEvent):void => {
    e.preventDefault()
    props.submitForm(formFields)
  }

  return (
    <form ref={formRef} onSubmit={submit} className="payment-form">
      <label>
        Card Number*
          <input required value={formFields.cardNumber} size={16} onChange={onChange} className="form-input" type="number" placeholder="Ex. 1234-5678-9876-5667" name="cardNumber" id="card-number" />
      </label>

      <label>
        Name on Card*
          <input required value={formFields.cardName} onChange={onChange} className="form-input" type="text" placeholder="Ex. John Doe" name="cardName" id="name-card" />
      </label>

      <label>
        Exp Month*
          <input required min="1" max="12" size={2} value={formFields.expMonth} onChange={onChange} className="form-input" type="number" placeholder="Ex. 10" name="expMonth" id="exp-month" />
      </label>

      <label>
        Exp Year*
          <input required min="2021" max="2030" size={4} value={formFields.expYear} onChange={onChange} className="form-input" type="number" name="expYear" placeholder="Ex. 2025" id="exp-year" />
      </label>

      <label>
        CVV Number*
          <input required min="0" max="999" size={3} value={formFields.cvvNumber} onChange={onChange} className="form-input" type="number" placeholder="Ex. 123" name="cvvNumber" id="cvv-number" />
      </label>

      <label>
        <input checked={formFields.agree} required type="checkbox" name="agree" id="agree" onChange={onChange} />
          I agree to the <u>Term & Conditions</u> and <u>Privacy Policy</u>.
      </label>

      <button type="submit" disabled={!isFormValid} className="btn">{ props.children }</button>
    </form>
  )
}

export default PaymentForm