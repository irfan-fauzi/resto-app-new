import '../resto-item'

class RestoList extends HTMLElement {
  set dataResto(data) {
    this._dataResto = data
    this.render()
  }

  set setDetailPage(data) {
    this._detailPage = data
    this.render()
  }

  render() {
    this.innerHTML = ''
    this._dataResto.forEach((item) => {
      const restoItem = document.createElement('resto-item')
      this.appendChild(restoItem)
      restoItem.dataResto = item
      restoItem.setDetailPage = this._detailPage
    })
  }
}

customElements.define('resto-list', RestoList)
