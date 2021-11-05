import 'regenerator-runtime'
import '../styles/main.css'
import './views/components/header'
import './views/components/hero'
import './views/components/resto-list'
import './views/components/footer'
import './views/components/detail-resto'
import App from './views/app'
import swRegister from './utils/sw-register'

const app = new App({
  content: document.querySelector('#mainContent'),
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
