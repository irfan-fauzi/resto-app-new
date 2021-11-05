import FavoriteRestoranIdb from '../data/favorite-resto-idb'
import '../views/components/atom/button'

const LikeButtonInitiator = {
  async init({ likeButtonContainer, detailResto }) {
    this._likeButtonContainer = likeButtonContainer
    this._detailResto = detailResto

    await this._renderButton()
  },

  async _renderButton() {
    const btnLike = document.createElement('app-btn')
    btnLike.title = 'simpan ke favorite'
    this._likeButtonContainer.appendChild(btnLike)
    btnLike.event = async () => {
      await FavoriteRestoranIdb.putResto(this._detailResto)
      const db = await FavoriteRestoranIdb.getAllResto()
      console.log(db)
    }
  },

  // async _isRestoExist(id) {
  //   const dataResto = await FavoriteRestoranIdb.getResto(id)
  //   return dataResto
  // },
}

export default LikeButtonInitiator
