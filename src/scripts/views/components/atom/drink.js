class Drink extends HTMLElement {
  set dataDrink(drink) {
    this._dataDrink = drink
    this.render()
  }

  render() {
    this.innerHTML = `
    <li>☕ ${this._dataDrink.name}</li>
    `
  }
}

customElements.define('drink-menu', Drink)
