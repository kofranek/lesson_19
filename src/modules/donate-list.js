export class DonateList {
  #donatesContainer
  #donates
 
    #createDonatesList (donates) {
    const donatesContainerDonates = document.createElement('div')
    donatesContainerDonates.className = 'donates-container__donates'
    donates.forEach(el => {
      const amount = el.amount
      const date = el.date
      const donateItem = document.createElement('div')
      donateItem.className = 'donate-item'
      const dateString = this.dateString(date)
      const b = document.createElement('b')
      b.textContent = ` - ${amount}$`
      donateItem.append(dateString,b)

      donatesContainerDonates.append(donateItem)
    })
    return donatesContainerDonates
  }

  constructor (donates) {
    this.#donatesContainer = document.createElement('div')
    this.#donatesContainer.className = 'donates-container'
    this.#donates = donates
  }

  render () {
    const h2 = document.createElement('h2')
    h2.className = 'donates-container__title'
    h2.textContent = 'Список донатов'
    const donatesContainerDonates = this.#createDonatesList(this.#donates)
    this.#donatesContainer.append(h2, donatesContainerDonates)
    console.log('#donatesContainer=', this.#donatesContainer)
    return this.#donatesContainer
  }

  dateString (date) {
    const dateText = `${date.getDate()}. ${date.getMonth() +
      1}. ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    return dateText
  }

}
