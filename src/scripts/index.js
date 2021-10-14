import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import './components/header.js'
import './components/hero.js'
import './components/resto-list'
import fakeData from '../DATA.json'

class RestoApp {
  constructor(){
    this.restoList = document.querySelector('resto-list')
    this.fakeData = fakeData.restaurants
  }
  renderRestoList(){
    this.restoList.dataResto = this.fakeData
  } 
}

const restoApp = new RestoApp()
restoApp.renderRestoList()