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
            <a href="#">
              <img class="social-media" src="images/icons/facebook.png" alt="facebook">
            </a>
            <a href="#">
              <img class="social-media" src="images/icons/twitter.png" alt="twitter">
            </a>
            <a href="#">
              <img class="social-media" src="images/icons/instagram.png" alt="instagram">
            </a>
          </div>
        </div>
        <div class="wrap penutup">
          <img src="images/icons/logo-3.svg" alt="logo" class="logo">
          <p>Kemangi adalah sebuah website untuk mendapatkan informasi restoran-restoran kekinian dan terlengkap.</p>
          <p>Copyright © 2021 - Kemangi</p>
        </div>
      </div>
    </footer>
    `
  }
}

customElements.define('app-footer', Footer)
