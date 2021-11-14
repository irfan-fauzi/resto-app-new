import FavoriteRestoranIdb from '../../data/favorite-resto-idb'
import '../components/molekul/resto-list'
import '../components/not-found'

const Favorite = {
  async render() {
    return `
    <div class="favorite-page">
      <h1 class="title-page">Favorite Restourant</h1>
      <section class="article" id="article">

      </section>
    </div>
    `
  },

  async afterRender() {
    const resto = await FavoriteRestoranIdb.getAllResto()
    const articleContainer = document.querySelector('#article')
    if (resto.length === 0) {
      const notFound = document.createElement('not-found')
      articleContainer.appendChild(notFound)
    }
    const restoList = document.createElement('resto-list')
    articleContainer.appendChild(restoList)
    restoList.dataResto = resto
    restoList.setDetailPage = 'favorite-detail'
  },

}

export default Favorite
