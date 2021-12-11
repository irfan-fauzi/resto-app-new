/* eslint-disable linebreak-style */
class Footer extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <footer>
      <div class="container">
        <div class="wrap sitemap">
          <h3 class="title">sitemap</h3>
          <ul class="flex">
            <li><a href="#/">Beranda</a></li>
            <li><a href="#/favorite">favorite</a></li>
            <li><a href="#/about">About</a></li>
          </ul>
        </div>
        <div class="wrap kontak">
          <h3 class="title">contact us</h3>
          <div class="flex">
            <a href="https://web.facebook.com/ahmad.i.sadega/" target="_blank" rel="noreferrer">
              <picture>
                <source srcset="images/icons/facebook.webp" type="image/webp">
                <source srcset="images/icons/facebook.png" type="image/png">
                <img class="social-media" src="images/icons/facebook.png" alt="facebook">
              </picture>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <picture>
              <source srcset="images/icons/twitter.webp" type="image/webp">
              <source srcset="images/icons/twitter.png" type="image/png">
              <img class="social-media" src="images/icons/twitter.png" alt="twitter">
             </picture> 
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <picture>
              <source srcset="images/icons/instagram.webp" type="image/webp">
              <source srcset="images/icons/instagram.png" type="image/png">
              <img class="social-media" src="images/icons/instagram.png" alt="instagram">
              </picture>
            </a>
          </div>
        </div>
        <div class="wrap penutup">
          <picture>
          <source srcset="images/icons/logo-1.png" type="image/png">
          <img src="images/icons/logo-1.png" alt="logo" class="logo">
          </picture>
          <p>Kemangi adalah sebuah website untuk mendapatkan informasi restoran-restoran kekinian dan terlengkap.</p>
          <p>Copyright © 2021 - Kemangi</p>
        </div>
      </div>
    </footer>
    `
  }
}

customElements.define('app-footer', Footer)
