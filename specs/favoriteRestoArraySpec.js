/* eslint-disable consistent-return */
/* eslint-disable no-prototype-builtins */
/* eslint-disable eqeqeq */
import { itActAsFavoriteRestoModel } from './contract/favoriteRestoContract'

let favoriteResto = []
const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return
    }
    return favoriteResto.find((resto) => resto.id == id)
  },
  getAllResto() {
    return favoriteResto
  },
  putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return
    }
    if (this.getResto(resto.id)) {
      return
    }
    favoriteResto.push(resto)
  },

  deleteResto(id) {
    favoriteResto = favoriteResto.filter((resto) => resto.id !== id)
  },

}

// eslint-disable-next-line no-undef
describe('favorite resto contract array test implementasi', () => {
  // eslint-disable-next-line no-undef
  afterEach(() => {
    favoriteResto = []
  })
  itActAsFavoriteRestoModel(FavoriteRestoArray)
})
