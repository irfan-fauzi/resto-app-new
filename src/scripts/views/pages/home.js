import RestoDBSource from '../../data/resto-db-source'
import '../components/molekul/resto-list'

const Home = {
  async render() {
    return `
    <hero-app></hero-app>
    
    <section class="article" id="article">
      <h2 class="article__heading" id="article__heading">Restoran populer hari ini :</h2>
    </section>
    `
  },

  async afterRender() {
    const restourants = await RestoDBSource.listResto()
    const articleContainer = document.querySelector('#article')
    const restoList = document.createElement('resto-list')
    articleContainer.appendChild(restoList)
    restoList.dataResto = restourants
    restoList.setDetailPage = 'detail'
  },
}

export default Home
