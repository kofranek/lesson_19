import { DonateForm } from './donate-form'
import {DonateList} from './donate-list'

const mockDonates = [
  { amount: 4, date: new Date() },
  { amount: 20, date: new Date() },
  { amount: 3, date: new Date() },
  { amount: 1, date: new Date() }
]


export default class APP {

 #donateForm
 #donateList
  constructor () {
    this.#donateForm = new DonateForm()
    this.#donateList = new DonateList(mockDonates)
  }


  run () { 
    const donateHTML = this.#donateForm.render()
    const donateList = this.#donateList.render()
    //console.log('donateForm=', this.#donateForm)
    document.body.append(donateHTML,donateList)
  }
}
