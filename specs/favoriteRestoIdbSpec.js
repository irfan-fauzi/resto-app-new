/* eslint-disable no-undef */
// /* eslint-disable no-undef */

import { itActAsFavoriteRestoModel } from './contract/favoriteRestoContract'
import FavoriteRestoranIdb from '../src/scripts/data/favorite-resto-idb'

describe('favorite resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoranIdb.getAllResto()).forEach(async (resto) => {
      await FavoriteRestoranIdb.deleteResto(resto.id)
    })
  })

  itActAsFavoriteRestoModel(FavoriteRestoranIdb)
})
