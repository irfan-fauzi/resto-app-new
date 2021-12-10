/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const assert = require('assert')

Feature('Add Favorite Resto')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty message', ({ I }) => {
  I.seeElement('not-found')
  I.see('belum ada restourant favorite', '#not-found-text')
})

// Scenario('liking one resto', async ({ I }) => {
//   I.see('belum ada restourant favorite', '#not-found-text')
//   I.amOnPage('/')

//   I.seeElement('#title-resto a')
//   const firstResto = locate('#title-resto a').first()
//   const firstRestoTitle = await I.grabTextFrom(firstResto)
//   I.click(firstResto)

//   I.seeElement('.btn-favorite')
//   I.click('.btn-favorite')

//   I.amOnPage('/#/favorite')
//   I.seeElement('.article__item')
//   const favoriteResto = await I.grabTextFrom('#title-resto')
//   assert.strictEqual(favoriteResto, firstRestoTitle)
// })

Scenario('liking 3 resto', async ({ I }) => {
  I.see('belum ada restourant favorite', '#not-found-text')
  I.amOnPage('/')

  I.seeElement('#title-resto a')
  const titles = []

  for (let i = 1; i <= 3; i++) {
    const titleClicked = locate('#title-resto a').at(i)
    const valueTitle = await I.grabTextFrom(titleClicked)
    // klik judul resto => otomatis akan ke halaman /favorite
    I.click(titleClicked)
    // di halaman favorite, lihat dulu kontennya
    I.seeElement('.detail')
    I.seeElement('.btn-favorite')
    I.click('.btn-favorite')
    titles.push(valueTitle)
    // kembali ke home
    I.amOnPage('/')
  }
  I.amOnPage('/#/favorite')
  I.seeElement('.article__item')
  // const x1 = locate('#title-resto a').at(1)
  // const valueTitle = await I.grabTextFrom(x1)
  // const x2 = locate('#title-resto a').at(1)
  // const valueTitle2 = await I.grabTextFrom(x2)
  // const x3 = locate('#title-resto a').at(1)
  // const valueTitle3 = await I.grabTextFrom(x3)
  // console.log(valueTitle)
  // console.log(titles)
})
