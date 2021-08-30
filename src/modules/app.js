import { DonateForm } from './donate-form'
import { DonateList } from './donate-list'

export default class APP {
  #donateForm
  #donateList

  constructor () {
    this.state = {
      donates: [],
      totalAmount: 0
    }

    this.#donateForm = new DonateForm(this.state.totalAmount,this.createNewDonate.bind(this))
    this.#donateList = new DonateList(this.state.donates)
  }

  run () {
    const donateHTML = this.#donateForm.render()
    const donateList = this.#donateList.render()
    document.body.append(donateHTML, donateList)
  }

  createNewDonate (newDonate) {
    this.state.donates.push(newDonate)
    this.state.totalAmount +=Number(newDonate.amount)
    this.#donateList.addNewDonate(newDonate) //Я не вызываю метод updateDonates, потому что меняется только один элемент
    this.#donateForm.updateTotalAmount(this.state.totalAmount)
  }

}
