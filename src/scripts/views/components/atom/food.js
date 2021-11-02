class Food extends HTMLElement {
  set dataFood(food) {
    this._dataFood = food
    this.render()
  }

  render() {
    this.innerHTML = `
    <li>🍲 ${this._dataFood.name}</li>
    `
  }
}

customElements.define('food-menu', Food)
