import { DonateForm } from './donate-form'
import { DonateList } from './donate-list'
import { calculateSumOfNumbers } from '../core/utils'

export default class APP {
  /************ Private attributes *********************/
  #donateForm
  #donateList

  /************Constructor **********************************/
  constructor () {
    this.state = {
      donates: [],
      totalAmount: 0
    }

    this.initialiseState()

    this.#donateForm = new DonateForm(
      this.state.totalAmount,
      this.createNewDonate.bind(this)
    )
    this.#donateList = new DonateList(this.state.donates)
  }

  /******** Public methods **********************************/

  // main run method (called from App)
  run () {
    const donateHTML = this.#donateForm.render()
    const donateList = this.#donateList.render()
    document.body.append(donateHTML, donateList)
  }

  //create ne donate
  createNewDonate (newDonate) {
    this.state.donates.push(newDonate)
    this.state.totalAmount += Number(newDonate.amount)
    this.#donateList.addNewDonate(newDonate) //Я не вызываю метод updateDonates, потому что меняется только один элемент
    this.#donateForm.updateTotalAmount(this.state.totalAmount)
  }

  // initialise state (...e.g. read from the database)
  initialiseState () {
    const amount = calculateSumOfNumbers(mockDonates.map(el => el.amount))
    this.state.totalAmount = amount
    this.state.donates = mockDonates
  }
}

//mock up initial state of donates
const mockDonates = [
  { amount: 4, date: new Date() },
  { amount: 20, date: new Date() },
  { amount: 3, date: new Date() },
  { amount: 1, date: new Date() }
]
