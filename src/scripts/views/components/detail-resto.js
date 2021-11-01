class DetailResto extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <article class="detail">
      <div class="img-wrap">
        <img src="https://restaurant-api.dicoding.dev/images/medium/10" alt="">
      </div>
      <div class="title-wrap">
        <div>
          <h2 class="name-resto">Tempat siang hari</h2>
          <h3>Jln.Belimbing Timur no 27.Surabaya</h3>
        </div>
        <div>
          <h4>4.4(memuaskan)</h4>
        </div>
      </div>
      <div class="categorie">
        <p>Modern</p>
        <p>Bali</p>
      </div>
     
      
    </article>
    `
  }
}

customElements.define('detail-resto', DetailResto)
