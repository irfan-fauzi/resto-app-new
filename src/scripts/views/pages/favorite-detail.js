import FavoriteRestoranIdb from '../../data/favorite-resto-idb'
import UrlParser from '../../routes/url-parser'
import FavoriteButtonPresenter from '../../utils/favoriteButtonPresenter'
import '../components/detail-resto'

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
    const detailRestoElement = document.createElement('detail-resto')
    detailRestoElement.detailResto = restoDetailDB
    detailPageContainer.appendChild(detailRestoElement)
    FavoriteButtonPresenter.init({
      parentElement: detailRestoElement,
      favoriteResto: FavoriteRestoranIdb,
      restoDetail: restoDetailDB,
    })
  },

}

export default FavoriteDetail
