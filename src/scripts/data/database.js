import { openDD } from 'idb'
import CONFIG from '../globals/config'

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG

const dbPromise = openDD(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' })
  },
})
const FavoriteRestoranIdb = {
  async getResto(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id)
  },
  async getAllResto() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME)
  },
  async putResto(resto) {
    return (await dbPromise).put(OBJECT_STORE_NAME, resto)
  },
  async deleteResto(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id)
  },

}

export default FavoriteRestoranIdb
