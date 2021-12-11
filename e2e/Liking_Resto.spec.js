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

Scenario('liking one resto', async ({ I }) => {
  I.see('belum ada restourant favorite', '#not-found-text')
  I.amOnPage('/')

  I.seeElement('#title-resto a')
  const firstResto = locate('#title-resto a').first()
  const firstRestoTitle = await I.grabTextFrom(firstResto)
  I.click(firstResto)

  I.seeElement('.btn-favorite')
  I.click('.btn-favorite')

  I.amOnPage('/#/favorite')
  I.seeElement('.article__item')
  const favoriteResto = await I.grabTextFrom('#title-resto')
  assert.strictEqual(favoriteResto, firstRestoTitle)
})

Scenario('liking two resto and make sure that resto show right', async ({ I }) => {
  I.see('belum ada restourant favorite', '#not-found-text')
  I.amOnPage('/')

  I.seeElement('#title-resto a')
  const titles = []

  for (let i = 1; i <= 2; i++) {
    const titleClicked = locate('#title-resto a').at(i)
    const valueTitle = await I.grabTextFrom(titleClicked)
    I.click(titleClicked)
    I.seeElement('.detail')
    I.seeElement('.btn-favorite')
    I.click('.btn-favorite')
    titles.push(valueTitle)
    I.amOnPage('/')
  }
  I.amOnPage('/#/favorite')
  I.see(titles[0], '#title-resto a')
  I.see(titles[1], '#title-resto a')
})

Scenario('add and than delete from favorite resto', async ({ I }) => {
  I.see('belum ada restourant favorite', '#not-found-text')
  I.amOnPage('/')

  I.seeElement('#title-resto a')
  I.click(locate('#title-resto a').first())

  I.seeElement('.btn-favorite')
  I.click('.btn-favorite')

  I.amOnPage('/#/favorite')
  I.seeElement('.article__item')

  I.seeElement('#title-resto a')
  I.click(locate('#title-resto a').first())
  I.seeElement('.btn-favorite')
  I.click('.btn-favorite')

  I.amOnPage('/#/favorite')
  I.see('belum ada restourant favorite', '#not-found-text')
})
