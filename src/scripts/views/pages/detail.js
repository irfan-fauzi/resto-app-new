import FavoriteRestoranIdb from '../../data/favorite-resto-idb'
import RestoDBSource from '../../data/resto-db-source'
import UrlParser from '../../routes/url-parser'
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
    detailPageContainer.appendChild(detailRestoElement)
    detailRestoElement.detailResto = restoDetail.restaurant
    detailRestoElement.labelButton = 'add to favorite'
    // eslint-disable-next-line func-names
    detailRestoElement.eventButtonFavorite = async function () {
      await FavoriteRestoranIdb.putResto(this._detailResto)
      detailRestoElement.labelButton = 'tersimpan'
    }
  },

}

export default RestoDetail
