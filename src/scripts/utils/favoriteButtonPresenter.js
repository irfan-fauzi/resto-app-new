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
    if (this._isRestoExist(id)) {
      this._addResto()
    } else {
      this._removeResto()
    }
  },

  async _isRestoExist(id) {
    const resto = await this._favoriteResto.getResto(id)
    return !!resto
  },

  async _addResto() {
    this._parentElement.labelButton = '💾 simpan ke favorite'
    this._parentElement.eventButtonFavorite = async () => {
      await this._favoriteResto.putResto(this._restoDetail)
      this._parentElement.labelButton = '✔ Tersimpan'
    }
  },

  async _removeResto() {
    this._parentElement.labelButton = '❌ hapus dari favorite'
    this._parentElement.eventButtonFavorite = async function () {
      console.log('hapus')
    }
  },

}

export default FavoriteButtonPresenter
