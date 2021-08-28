export class DonateForm {
  #donateForm
  constructor () {
    this.#donateForm = document.createElement('form')
    this.#donateForm.className = 'donate-form'
  }

  render () {
    const input = document.createElement('input')
    input.className = 'donate-form__donate-input'
    input.name = 'amount'
    input.setAttribute('type', 'number')
    input.setAttribute('max', '100')
    input.setAttribute('min', '0')
    input.setAttribute('required', '')
    const label = document.createElement('label')
    label.className = 'donate-form__input-label'
    label.textContent = 'Введите сумму в $'
    label.append(input)
    const h1 = document.createElement('h1')
    h1.className = 'total-amount'
    h1.textContent = '28$'
    const button = document.createElement('button')
    button.className = 'donate-form__submit-button'
    button.setAttribute('type', 'submit')
    button.textContent='Задонатить'
    this.#donateForm.append(h1)
    this.#donateForm.append(label)
    this.#donateForm.append(button)

    //console.log('donateForm=',this.#donateForm)

    return this.#donateForm
  }
}
