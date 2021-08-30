import { getFormattedTime } from '../core/utils'

export class DonateList {
  /************ Private attributes & methods *********************/
  #donatesContainer
  #donates

  #createDonatesList (donates) {
    const donatesContainerDonates = document.createElement('div')
    donatesContainerDonates.className = 'donates-container__donates'
    donates.forEach(el => {
      const donateItem = this.#addItem(el.amount, el.date)
      donatesContainerDonates.append(donateItem)
    })

    return donatesContainerDonates
  }

  #addItem (amount, date) {
    const donateItem = document.createElement('div')
    donateItem.className = 'donate-item'
    const dateString = this.dateString(date)
    const b = document.createElement('b')
    b.textContent = ` - ${amount}$`
    donateItem.append(dateString, b)
    return donateItem
  }

  #renderDonates () {
    const donatesContainerDonates = this.#createDonatesList(this.#donates)
    this.#donatesContainer.append(donatesContainerDonates)
    return this.#donatesContainer
  }

  /************Constructor **********************************/
  constructor (donates) {
    this.#donates = donates
    this.#donatesContainer = document.createElement('div')
    this.#donatesContainer.className = 'donates-container'
  }

  /******** Public methods **********************************/

  //update rendered donate list
  updateDonates (donates) {
    const donatesContainerDonates = document.querySelector(
      '.donates-container__donates'
    )
    donatesContainerDonates.remove()

    this.#donates = donates
    this.#renderDonates()
  }

  //add new donate to donate list
  addNewDonate (newDonate) {
    const donateContainerDonate = document.querySelector(
      '.donates-container__donates'
    )
    donateContainerDonate.append(
      this.#addItem(newDonate.amount, newDonate.date)
    )
  }

  //render donate list
  render () {
    const h2 = document.createElement('h2')
    h2.className = 'donates-container__title'
    h2.textContent = 'Список донатов'
    this.#donatesContainer.append(h2)

    return this.#renderDonates()
  }

  //convert date to string for redering date in donate list
  dateString (date) {
    const dateText = getFormattedTime(date)

    //const dateText = `${date.getDate()}. ${date.getMonth() +
    // 1}. ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    return dateText
  }
}
