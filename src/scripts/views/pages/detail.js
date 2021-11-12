import RestoDBSource from '../../data/resto-db-source'
import UrlParser from '../../routes/url-parser'
import LikeButtonInitiator from '../../utils/like-resto-init'
import '../components/detail-resto'

const RestoDetail = {
  async render() {
    return `
    <div class="detail-page">
    </div>
    `
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restoDetail = await RestoDBSource.detailResto(url.id)
    const detailPageContainer = document.querySelector('.detail-page')
    const detailRestoElement = document.createElement('detail-resto')
    detailRestoElement.detailResto = restoDetail.restaurant
    detailPageContainer.appendChild(detailRestoElement)

    const btnWrap = detailRestoElement.querySelector('.btn-wrap')
    LikeButtonInitiator.init({
      likeButtonContainer: btnWrap,
      detailResto: {
        id: restoDetail.restaurant.id,
        pictureId: restoDetail.restaurant.pictureId,
        name: restoDetail.restaurant.name,
        description: restoDetail.restaurant.description,
        city: restoDetail.restaurant.city,
        address: restoDetail.restaurant.address,
        rating: restoDetail.restaurant.rating,
        menus: restoDetail.restaurant.menus,
        customerReviews: restoDetail.restaurant.customerReviews,
      },
    })
  },

}

export default RestoDetail
