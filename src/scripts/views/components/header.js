/* eslint-disable linebreak-style */
class Header extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <header>
      <nav id="drawer" class="nav">
        <a href="/">
        <picture>
          <source srcset="images/icons/logo-1.webp" type="image/webp">
          <source srcset="images/icons/logo-1.png" type="image/jpeg">
          <img src="images/icons/logo-1.png" alt="logo restoran" class="logo">
        </picture>  
        </a>
        <button class="nav__btn">☰</button>
        <ul class="nav__list">
          <li class="nav__item"><a href="#/">Home</a></li>
          <li class="nav__item"><a href="#/favorite">Favorite</a></li>
          <li class="nav__item"><a href="https://github.com/irfan-fauzi" target="_blank" rel="noreferrer">About Us</a></li>
        </ul>
      </nav>
    </header>
    `
    const shadow = document.querySelector('.shadow')
    const navBtn = this.querySelector('.nav__btn')
    const navList = this.querySelector('.nav__list')
    navBtn.addEventListener('click', () => {
      navList.classList.toggle('show')
      shadow.classList.toggle('shadow-show')
    })
  }
}
customElements.define('app-header', Header)
