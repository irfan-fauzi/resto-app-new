class NotFound extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <div class="not-found-page">
      <h1 id="not-found-text" class="title text-center">belum ada restourant favorite</h1>
      <picture>
      <source srcset="images/food-truck.webp" type="image/webp">
      <source srcset="images/food-truck.png" type="image/png">
      <img src="images/food-truck.png" alt="data kosong" class="img-ilustrasi">
      </picture>
    </div>
    `
  }
}

customElements.define('not-found', NotFound)
