import CONFIG from '../../globals/config'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

class RestoItem extends HTMLElement {
  set dataResto(data) {
    this._dataResto = data
    this.render()
  }

  set setDetailPage(data) {
    this._detailPage = data
    this.render()
  }

  render() {
    const {
      name, description, pictureId, city, rating, id,
    } = this._dataResto
    this.innerHTML = `
      <article class="article__item" tabindex="0">
        <picture>
          <source media="(max-width: 600px)" data-srcset=${CONFIG.SMALL_IMAGE_URL + pictureId} type="image/jpeg">
          <img data-src=${CONFIG.SMALL_IMAGE_URL + pictureId} alt="meja makan dalam ruangan dengan tirai yang besar" class="lazyload"></img>
        </picture>
        <div class="content">
          <h2 class="title" id="title-resto"><a href="#/${this._detailPage}/${id}">${name}</a></h2>
          <div class="flex">
            <h3 class="city">${city}</h3>
            <h4 class="rating">⭐️ ${rating}</h4>
          </div>
          <p class="desc">${description}</p>
        </div>
      </article>  
    `
  }
}

customElements.define('resto-item', RestoItem)
