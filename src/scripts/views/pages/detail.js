import FavoriteRestoranIdb from '../../data/favorite-resto-idb'
import RestoDBSource from '../../data/resto-db-source'
import UrlParser from '../../routes/url-parser'
import FavoriteButtonPresenter from '../../utils/favoriteButtonPresenter'
import '../components/detail-resto'
import '../components/offline-warning'

const RestoDetail = {
  async render() {
    return `
    <div class="detail-page" id="article" tabindex="0">
      <div class="loading-container">
        <div class="loading"></div>
      </div>
    </div>
    <div id="buttonContainer"></div>
    `
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner()
      const restoDetail = await RestoDBSource.detailResto(url.id)
      const detailPageContainer = document.querySelector('.detail-page')
      const loading = document.querySelector('.loading-container')
      if (restoDetail.error === false) {
        loading.remove()
      }
      const detailRestoElement = document.createElement('detail-resto')
      detailPageContainer.appendChild(detailRestoElement)
      detailRestoElement.detailResto = restoDetail.restaurant
      FavoriteButtonPresenter.init({
        parentElement: document.querySelector('#buttonContainer'),
        favoriteResto: FavoriteRestoranIdb,
        restoDetail: restoDetail.restaurant,
      })
    } catch (error) {
      const detailPageContainer = document.querySelector('.detail-page')
      const offlineWarning = document.createElement('offline-warning')
      const loading = document.querySelector('.loading-container')
      loading.remove()
      detailPageContainer.appendChild(offlineWarning)
    }
  },

}

export default RestoDetail
