import { createButtonAddFavorite, createButtonRemoveFavorite } from '../views/components/template/template-creator'

/* eslint-disable func-names */
const FavoriteButtonPresenter = {
  async init({ parentElement, favoriteResto: FavoriteResto, restoDetail }) {
    this._parentElement = parentElement
    this._favoriteResto = FavoriteResto
    this._restoDetail = restoDetail
    await this._renderButton()
  },

  async _renderButton() {
    const { id } = this._restoDetail
    if (await this._isRestoExist(id)) {
      this._removeResto()
    } else {
      this._addResto()
    }
  },

  async _isRestoExist(id) {
    const resto = await this._favoriteResto.getResto(id)
    return !!resto
  },

  async _addResto() {
    this._parentElement.innerHTML = createButtonAddFavorite('💾')
    const btn = document.querySelector('.btn-favorite')
    btn.addEventListener('click', async () => {
      await this._favoriteResto.putResto(this._restoDetail)
      this._parentElement.innerHTML = createButtonAddFavorite('✔')
    })
  },

  async _removeResto() {
    this._parentElement.innerHTML = createButtonRemoveFavorite('❌')
    const btn = document.querySelector('.btn-favorite')
    btn.addEventListener('click', async () => {
      await this._favoriteResto.deleteResto(this._restoDetail.id)
      this._parentElement.innerHTML = createButtonAddFavorite('✔')
    })
  },

}

export default FavoriteButtonPresenter
