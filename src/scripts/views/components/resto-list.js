import './resto-item'

class RestoList extends HTMLElement {
  set dataResto(data) {
    this._dataResto = data
    this.render()
  }

  set renderError(messege) {
    this._messege = messege
    this.innerHTML = `
    <h2 class="renderEror">${this._message}</h2>
    `
  }

  render() {
    this.innerHTML = ''
    this._dataResto.forEach((item) => {
      const restoItem = document.createElement('resto-item')
      this.appendChild(restoItem)
      restoItem.dataResto = item
    })
  }
}

customElements.define('resto-list', RestoList)
