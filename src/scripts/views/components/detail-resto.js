import CONFIG from '../../globals/config'
import './atom/food'
import './atom/drink'
import './atom/ulasan'

import LikeButtonInitiator from '../../utils/like-resto-init'

class DetailResto extends HTMLElement {
  set detailResto(resto) {
    this._detailResto = resto
    this.render()
  }

  render() {
    const {
      id,
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
        <div class="btn-wrap"></div>
        
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
    const btnWrap = this.querySelector('.btn-wrap')
    LikeButtonInitiator.init({
      likeButtonContainer: btnWrap,
      detailResto: {
        id,
        pictureId,
        name,
        description,
        city,
        address,
        rating,
        menus,
        customerReviews,
      },
    })
    // const btnApp = document.createElement('app-btn')
    // btnApp.title = 'simpan ke favorite'
    // btnWrap.appendChild(btnApp)
  }
}

customElements.define('detail-resto', DetailResto)
