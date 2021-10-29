/* eslint-disable semi */
import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import './views/components/header'
import './views/components/hero'
import './views/components/resto-list'
import './views/components/footer'
import App from './views/app'

const app = new App({
  content: document.querySelector('#mainContent'),
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
})
