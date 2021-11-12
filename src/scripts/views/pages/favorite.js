import FavoriteRestoranIdb from '../../data/favorite-resto-idb'
import '../components/molekul/resto-list'

const Favorite = {
  async render() {
    return `
    <div class="favorite-page">
      <h1 class="title-page">Favorite page</h1>
      <section class="article" id="article">

      </section>
    </div>
    `
  },

  async afterRender() {
    const resto = await FavoriteRestoranIdb.getAllResto()
    const articleContainer = document.querySelector('#article')
    const restoList = document.createElement('resto-list')
    articleContainer.appendChild(restoList)
    restoList.dataResto = resto
    restoList.setDetailPage = 'favorite-detail'
  },

}

export default Favorite
