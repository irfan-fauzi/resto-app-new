class Ulasan extends HTMLElement {
  set dataUlasan(data) {
    this._dataUlasan = data
    this.render()
  }

  render() {
    this.innerHTML = `
    <div class="ulasan">
      <p class="nama">${this._dataUlasan.name}</p>
      <p class="komen">“${this._dataUlasan.review}”</p>
      <p class="waktu">-Diulas pada ${this._dataUlasan.date}</p>
    </div>
    `
  }
}

customElements.define('ulasan-resto', Ulasan)
