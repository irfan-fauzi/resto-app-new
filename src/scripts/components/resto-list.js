import './resto-item.js'

class RestoList extends HTMLElement{
  set dataResto(data){
    this._dataResto = data
    this.render()
  }

  set renderError(messege){
    this._messege = messege
    this.innerHTML = `
    <h2 class="renderEror">${this._message}</h2>
    ` 
  }

  render(){
    this.innerHTML = ``
    console.log(this._dataResto)
    this._dataResto.forEach(item => {
      const restoItem = document.createElement('resto-item')
      this.appendChild(restoItem)
      restoItem.dataResto = item
    })
  }
}

customElements.define('resto-list', RestoList)