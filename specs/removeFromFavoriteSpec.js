/* eslint-disable no-undef */
import FavoriteRestoranIdb from '../src/scripts/data/favorite-resto-idb'
import { btnPresenterInit } from './helpers/testFactories'

describe('Hapus data dari favorite', () => {
  beforeEach(async () => {
    document.body.innerHTML = '<div id="buttonContainer"></div>'
    await FavoriteRestoranIdb.putResto({ id: 1 })
  })
  afterEach(async () => {
    await FavoriteRestoranIdb.deleteResto(1)
  })

  // test 1
  it('harusnya muncul tombol "hapus" ketika resto sudah difavoritkan', async () => {
    await btnPresenterInit({ id: 1 })
    expect(document.querySelector('[aria-label="remove this resto"]'))
      .toBeTruthy()
  })

  // test 2
  it('harusnya tidak muncul tombol "save" ketika resto sudah difavoritkan', async () => {
    await btnPresenterInit({ id: 1 })
    expect(document.querySelector('[aria-label="add this resto"]'))
      .toBeFalsy()
  })

  // test 3
  it('harusnya bisa menghapus resto dari daftar favorit', async () => {
    await btnPresenterInit({ id: 1 })
    document.querySelector('[aria-label="remove this resto"]').dispatchEvent(new Event('click'))
    expect(await FavoriteRestoranIdb.getAllResto()).toEqual([])
  })

  // test 4
  it('harusnya tidak ada error jika resto tidak ada dalam database', async () => {
    // tambahkan data : {id: 1}
    await btnPresenterInit({ id: 1 })
    // hapus lagi data tadi
    await FavoriteRestoranIdb.deleteResto(1)
    document.querySelector('[aria-label="remove this resto"]').dispatchEvent(new Event('click'))
    // hasilnya harus kosong
    expect(await FavoriteRestoranIdb.getAllResto()).toEqual([])
  })
})
