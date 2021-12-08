/* eslint-disable no-undef */
import FavoriteRestoranIdb from '../src/scripts/data/favorite-resto-idb'
import { btnPresenterInit } from './helpers/testFactories'

describe('Favoritkan Resto :', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="buttonContainer"></div>'
  })
  // test 1
  it('harusnya muncul tombol simpan, ketika resto belum pernah difavoritkan', async () => {
    await btnPresenterInit({ id: 1 })
    expect(document.querySelector('[aria-label="add this resto"]'))
      .toBeTruthy()
  })
  // test 2
  it('harusnya tombol hapus tidak ditampilkan, ketika resto belum pernah di tambahkan', async () => {
    await btnPresenterInit({ id: 1 })
    expect(document.querySelector('[aria-label="remove this resto"]'))
      .toBeFalsy()
  })

  // test 3
  it('harusnya bisa menambahkan resto ke favorite', async () => {
    await btnPresenterInit({ id: 1 })
    document.querySelector('.btn-favorite').dispatchEvent(new Event('click'))
    const resto = await FavoriteRestoranIdb.getResto(1)
    expect(resto).toEqual({ id: 1 })
    FavoriteRestoranIdb.deleteResto(1)
  })

  // test 4 --- skenario negatif
  it('should not add resto again when its already added', async () => {
    await btnPresenterInit({ id: 1 })
    await FavoriteRestoranIdb.putResto({ id: 1 })
    document.querySelector('.btn-favorite').dispatchEvent(new Event('click'))
    expect(await FavoriteRestoranIdb.getAllResto()).toEqual([{ id: 1 }])
    FavoriteRestoranIdb.deleteResto(1)
  })

  // test 5
  it('should not add resto when it has no id', async () => {
    await btnPresenterInit({})
    document.querySelector('.btn-favorite').dispatchEvent(new Event('click'))
    expect(await FavoriteRestoranIdb.getAllResto()).toEqual([])
  })
})
