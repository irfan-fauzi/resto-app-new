import Favorite from '../views/pages/favorite'
import FavoriteDetail from '../views/pages/favorite-detail'
import Home from '../views/pages/home'
import RestoDetail from '../views/pages/detail'

const routes = {
  '/': Home,
  '/favorite': Favorite,
  '/detail/:id': RestoDetail,
  '/favorite-detail/:id': FavoriteDetail,
}

export default routes
