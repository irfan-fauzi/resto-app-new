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
    this._parentElement.labelButton = '💾 simpan ke favorite'
    this._parentElement.ariaLabel = 'save'
    this._parentElement.eventButtonFavorite = async () => {
      await this._favoriteResto.putResto(this._restoDetail)
      this._parentElement.labelButton = '✔ Tersimpan'
      this._renderButton()
    }
  },

  async _removeResto() {
    this._parentElement.labelButton = '❌ hapus dari favorite'
    this._parentElement.ariaLabel = 'remove'
    this._parentElement.eventButtonFavorite = async () => {
      await this._favoriteResto.deleteResto(this._restoDetail.id)
      this._parentElement.labelButton = '✔ Terhapus'
      this._renderButton()
    }
  },

}

export default FavoriteButtonPresenter
