class OfflineWarning extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <div class="offline-container">
      <h2>oops.. anda belum tersambung ke internet</h2>
      <img src="images/food-truck.svg" alt="offline image">
    </div>
    `
  }
}

customElements.define('offline-warning', OfflineWarning)
