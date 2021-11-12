import FavoriteRestoranIdb from '../../data/favorite-resto-idb'
import UrlParser from '../../routes/url-parser'
import '../components/favorite-page/detail-favorite'

const FavoriteDetail = {
  async render() {
    return `
    <div class="detail-page">
    </div>
    `
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restoDetailDB = await FavoriteRestoranIdb.getResto(url.id)
    const detailPageContainer = document.querySelector('.detail-page')
    const detailRestoElement = document.createElement('detail-restofav')
    detailRestoElement.detailResto = restoDetailDB
    detailPageContainer.appendChild(detailRestoElement)
  },

}

export default FavoriteDetail
