/* eslint-disable semi */
import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import './views/components/header'
import './views/components/hero'
import './views/components/resto-list'
import './views/components/footer'
import fakeData from '../DATA.json'

class RestoApp {
  constructor() {
    this.restoList = document.querySelector('resto-list')
    this.fakeData = fakeData.restaurants
  }

  renderRestoList() {
    this.restoList.dataResto = this.fakeData
  }
}

const restoApp = new RestoApp()
restoApp.renderRestoList()
