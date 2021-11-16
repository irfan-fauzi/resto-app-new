import FavoriteRestoranIdb from '../../data/favorite-resto-idb'
import RestoDBSource from '../../data/resto-db-source'
import UrlParser from '../../routes/url-parser'
import '../components/detail-resto'
import '../components/offline-warning'

const RestoDetail = {
  async render() {
    return `
    <div class="detail-page">
      <div class="loading-container">
        <div class="loading"></div>
      </div>
    </div>
    `
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner()
      const restoDetail = await RestoDBSource.detailResto(url.id)
      const detailPageContainer = document.querySelector('.detail-page')
      const loading = document.querySelector('.loading-container')
      if (restoDetail) {
        loading.remove()
      }
      const detailRestoElement = document.createElement('detail-resto')
      detailPageContainer.appendChild(detailRestoElement)
      detailRestoElement.detailResto = restoDetail.restaurant
      detailRestoElement.labelButton = '💾 simpan ke favorite'
      // eslint-disable-next-line func-names
      detailRestoElement.eventButtonFavorite = async function () {
        await FavoriteRestoranIdb.putResto(this._detailResto)
        detailRestoElement.labelButton = 'tersimpan ✔'
      }
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
