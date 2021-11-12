import CONFIG from '../../globals/config'
import './atom/food'
import './atom/drink'
import './atom/ulasan'

class DetailResto extends HTMLElement {
  set detailResto(resto) {
    this._detailResto = resto
    this.render()
  }

  set eventButtonFavorite(event) {
    this._eventButtonFavorite = event
  }

  set labelButton(label) {
    this._label = label
    this.render()
  }

  render() {
    const {
      pictureId,
      name,
      description,
      city,
      address,
      rating,
      menus,
      customerReviews,
    } = this._detailResto
    this.innerHTML = `
    <article class="detail">
      <div class="img-wrap">
        <img src=${CONFIG.BASE_IMAGE_URL + pictureId} alt="" class="main-img">
      </div>
      <div class="title-wrap">
        <h2>${name}</h2>  
        <p><img class="icon-location" src="icons/location.png" alt="">Alamat: ${address} - ${city}</p>  
      </div>
      <div>
        <p class="peringkat"><img src="icons/star.png" class="icon-star" alt="">rating: ${rating}</p>
        <button class="btn-favorite">${this._label}</button>
        
      </div>
      <div class="categorie">
        
      </div>

      <section class="tentang-restoran">
        <h5>Tentang Restoran :</h5>
        <p>${description}</p>
      </section>

      <section class="menu">
        <h2>Menu</h2>
        <div class="flex">
          <div class="makanan">
            <p>makanan :</p>
            <ul id="foods">

            </ul>
          </div>
          <div class="minuman">
            <p>minuman: </p>
            <ul id="drinks">
              
            </ul>
          </div>
        </div>
      </section>

      <section class="review">
        <h3>Review</h3>
        <div class="rating-wrap">
          <p class="rating">Rating ${rating}</p>
         
          <p class="ulasan">${customerReviews.length} Ulasan</p>
        </div>
        <div id="ulasan-wrap">
          
          
        </div>
      </section>
      
    </article>
    `
    const foodWrap = this.querySelector('#foods')
    const drinkWrap = this.querySelector('#drinks')
    const ulasanWrap = this.querySelector('#ulasan-wrap')
    const btnFavorite = this.querySelector('.btn-favorite')

    btnFavorite.addEventListener('click', () => this._eventButtonFavorite())

    menus.foods.forEach((food) => {
      const foodComponent = document.createElement('food-menu')
      foodComponent.dataFood = food
      foodWrap.appendChild(foodComponent)
    })

    menus.drinks.forEach((drink) => {
      const drinkComponent = document.createElement('drink-menu')
      drinkComponent.dataDrink = drink
      drinkWrap.appendChild(drinkComponent)
    })

    customerReviews.forEach((data) => {
      const UlasanComponent = document.createElement('ulasan-resto')
      UlasanComponent.dataUlasan = data
      ulasanWrap.appendChild(UlasanComponent)
    })
  }
}

customElements.define('detail-resto', DetailResto)
