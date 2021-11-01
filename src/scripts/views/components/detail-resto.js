class DetailResto extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <article class="detail">
      <div class="img-wrap">
        <img src="/images/heros/hero-image_2.jpg" alt="">
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
     
      
    </article>
    `
  }
}

customElements.define('detail-resto', DetailResto)
