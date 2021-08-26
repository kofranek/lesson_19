import { DonateForm } from './donate-form'

export default class APP {

 #donateForm
  constructor () {
    this.#donateForm = new DonateForm()
  }

  run () {
    
    const donateHTML = this.#donateForm.render()
    console.log('donateForm=', this.#donateForm)
    document.body.append(donateHTML)
  }
}
