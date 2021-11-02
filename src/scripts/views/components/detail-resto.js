class DetailResto extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <article class="detail">
      <div class="img-wrap">
        <img src="/images/heros/hero-image_2.jpg" alt="" class="main-img">
      </div>
      <div class="title-wrap">
        <h2>Tempat siang hari</h2>  
        <p><img class="icon-location" src="/icons/location.png" alt="">Jln.Belimbing Timur no 27.Surabaya</p>  
      </div>
      <div>
        <p class="peringkat"><img src="/icons/star.png" class="icon-star" alt="">4.4(memuaskan)</p>
      </div>
      <div class="categorie">
        <p>Modern</p>
        <p>Bali</p>
      </div>

      <section class="tentang-restoran">
        <h5>Tentang Restoran :</h5>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
      </section>

      <section class="menu">
        <h2>Menu</h2>
        <div class="flex">
          <div class="makanan">
            <p>makanan :</p>
            <ul>
              <li>🍲 Matzo farfel</li>
              <li>🍲 Matzo farfel</li>
              <li>🍲 Matzo farfel</li>
              <li>🍲 Matzo farfel</li>
              <li>🍲 Matzo farfel</li>
              <li>🍲 Matzo farfel</li>
              <li>🍲 Matzo farfel</li>
            </ul>
          </div>
          <div class="minuman">
            <p>minuman: </p>
            <ul>
              <li>☕ Coklat</li>
              <li>☕ Coklat</li>
              <li>☕ Coklat</li>
              <li>☕ Coklat</li>
              <li>☕ Coklat</li>
              <li>☕ Coklat</li>
              <li>☕ Coklat</li>
              <li>☕ Coklat</li>
              <li>☕ Coklat</li>
              <li>☕ Coklat</li>
              <li>☕ Coklat</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="review">
        <h3>Review</h3>
        <div class="rating-wrap">
          <p class="rating">Rating 4.4</p>
          <p class="ulasan">2 Ulasan</p>
        </div>
        <div class="ulasan-wrap">
          <div class="ulasan">
            <p class="nama">Gilang</p>
            <p class="komen">“Harganya murah sekali!”</p>
            <p class="waktu">-Diulas pada 14 Agustus 201</p>
          </div>
          <div class="ulasan">
            <p class="nama">Ahmad</p>
            <p class="komen">“Tidak rekomendasi untuk pelajar!”</p>
            <p class="waktu"> -Diulas pada 13 November 2019</p>
          </div>
        </div>
      </section>
      
    </article>
    `
  }
}

customElements.define('detail-resto', DetailResto)
