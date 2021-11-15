import CONFIG from '../../globals/config'

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
        
        <img src=${CONFIG.BASE_IMAGE_URL + pictureId} alt="meja makan dalam ruangan dengan tirai yang besar" loading=lazy>
        <div class="content">
          <h2 class="title"><a href="#/${this._detailPage}/${id}">${name}</a></h2>
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
