import Favorite from '../views/pages/favorite'
import Home from '../views/pages/home'
import RestoDetail from '../views/pages/resto-detail'

const routes = {
  '/': Home,
  '/favorite': Favorite,
  '/detail/:id': RestoDetail,
}

export default routes
