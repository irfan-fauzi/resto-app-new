class RestoItem extends HTMLElement{
  set dataResto(data){
    this._dataResto = data
    this.render()
  }

  render(){
    const {name, description, pictureId, city, rating} = this._dataResto
    this.innerHTML = `
      <article class="article__item" tabindex="0">
        <img src=${pictureId} alt="meja makan dalam ruangan dengan tirai yang besar">
        <div class="content">
          <h2 class="title">${name}</h2>
          <div class="flex">
            <h3 class="city">${city}</h3>
            <h4 class="rating">${rating}</h4>
          </div>
          <p class="desc">${description}</p>
        </div>
      </article>
    `
  }
}

customElements.define('resto-item', RestoItem)