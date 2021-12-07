/* eslint-disable no-undef */
import FavoriteRestoranIdb from '../src/scripts/data/favorite-resto-idb'
import FavoriteButtonPresenter from '../src/scripts/utils/favoriteButtonPresenter'

describe('Favoritkan restoran :', () => {
  const detailResto = document.createElement('detail-resto')
  document.body.appendChild(detailResto)
  it('harusnya tampilkan tombol "favoritkan" ketika resto belum pernah difavoritkan', async () => {
    await FavoriteButtonPresenter.init({
      parentElement: detailResto,
      restoDetail: { id: 1 },
      favoriteResto: FavoriteRestoranIdb,
    })
    expect(document.querySelector('[aria-label="save"]')).toBeTruthy()
  })
})
