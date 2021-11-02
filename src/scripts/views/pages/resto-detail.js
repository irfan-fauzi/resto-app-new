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
    detailRestoElement.detailResto = restoDetail.restaurant
    detailPageContainer.appendChild(detailRestoElement)
  },

}

export default RestoDetail
