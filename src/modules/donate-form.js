export class DonateForm {
  #donateForm
  constructor (totalAmount, createNewDonate) {
    this.createNewDonat = createNewDonate
    this.#donateForm = document.createElement('form')
    this.#donateForm.className = 'donate-form'
    this.totalAmount = totalAmount
    this.#donateForm.addEventListener('submit', event => {
      event.preventDefault()
      const value = event.target.amount.value
      if (value > 0) {
        const newDonate = { amount: value, date: new Date() }
        this.createNewDonat(newDonate)
        event.target.amount.value = 0
      }
    })
  }

  //update total amount
  updateTotalAmount (newAmount, createNewDonate) {
    this.createNewDonate = createNewDonate
    const totalAmount = newAmount + '$'
    const totalAmountHTML = document.querySelector('#total-amount')
    totalAmountHTML.textContent = totalAmount
  }

  //render donate form
  render () {
    const input = document.createElement('input')
    input.className = 'donate-form__donate-input'
    input.name = 'amount'
    input.setAttribute('type', 'number')
    input.setAttribute('max', '100')
    input.setAttribute('min', '0')
    input.value = '0'
    input.setAttribute('required', '')
    const label = document.createElement('label')
    label.className = 'donate-form__input-label'
    label.textContent = 'Введите сумму в $'
    label.append(input)
    const h1 = document.createElement('h1')
    h1.id = 'total-amount'
    h1.textContent = this.totalAmount + '$'
    const button = document.createElement('button')
    button.className = 'donate-form__submit-button'
    button.setAttribute('type', 'submit')
    button.textContent = 'Задонатить'
    this.#donateForm.append(h1)
    this.#donateForm.append(label)
    this.#donateForm.append(button)
    return this.#donateForm
  }
}
