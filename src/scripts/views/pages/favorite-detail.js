import FavoriteRestoranIdb from '../../data/favorite-resto-idb'
import UrlParser from '../../routes/url-parser'
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
    detailRestoElement.labelButton = '❌ hapus dari favorite'
    detailPageContainer.appendChild(detailRestoElement)
    // eslint-disable-next-line func-names
    detailRestoElement.eventButtonFavorite = async function () {
      await FavoriteRestoranIdb.deleteResto(this._detailResto.id)
      detailRestoElement.labelButton = 'terhapus'
    }
  },

}

export default FavoriteDetail
