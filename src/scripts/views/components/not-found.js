class NotFound extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <div class="not-found-page">
      <h1 class="title text-center">belum ada restourant favorite</h1>
      <img src="images/empty-bro.svg" alt="data kosong" class="img-ilustrasi">
    </div>
    `
  }
}

customElements.define('not-found', NotFound)
