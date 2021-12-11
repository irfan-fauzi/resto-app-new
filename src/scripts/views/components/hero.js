/* eslint-disable linebreak-style */
class Hero extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
        <section class="hero" id="hero">
        <div class="hero__inner">
          <div class="text-wrap" tabindex="0">
            <h1>20ribu<span>/ orang</span></h1>
            <h2>Sarapan Lezat</h2>
            <h3>sarapan bergizi tinggi nutrisi bersama keluarga</h3>
            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sequi fuga deleniti nemo commodi cum praesentium dolor eos, porro dolorem! Lorem ipsum dolor sit amet.</h4>
            
              <button class="hero__btn"><a href="#article">cari restoran favorit</a></button>
      
          </div>
          <div class="img-wrap" tabindex="0">
            <picture>
            <source srcset="./images/heros/hero-image_2.jpg" type="image/jpeg">
            <img src="./images/heros/hero-image_2.jpg" alt="makanan dan minuman di atas meja">
            </picture>
          </div>
        </div>
      </section>
    `
  }
}

customElements.define('hero-app', Hero)
