/* eslint-disable no-undef */
Feature('Add Favorite Resto')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty message', ({ I }) => {
  I.seeElement('not-found')
  I.see('belum ada restourant favorite', '.title')
})

Scenario('liking one resto', async ({ I }) => {
  I.see('belum ada restourant favorite', '.title')
  I.amOnPage('/')

  I.seeElement('#title-resto a')
  I.click(locate('#title-resto a').first())

  I.seeElement('.btn-favorite')
  I.click('.btn-favorite')

  I.amOnPage('/#/favorite')
  I.seeElement('.article__item')
})
