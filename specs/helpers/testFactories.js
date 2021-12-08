/* eslint-disable import/prefer-default-export */
import FavoriteRestoranIdb from '../../src/scripts/data/favorite-resto-idb'
import FavoriteButtonPresenter from '../../src/scripts/utils/favoriteButtonPresenter'

const btnPresenterInit = async (resto) => {
  await FavoriteButtonPresenter.init({
    parentElement: document.querySelector('#buttonContainer'),
    restoDetail: resto,
    favoriteResto: FavoriteRestoranIdb,
  })
}

export { btnPresenterInit }
