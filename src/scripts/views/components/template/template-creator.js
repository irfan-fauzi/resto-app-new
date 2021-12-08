const createButtonAddFavorite = (icon) => `
  <button class="btn-favorite save" aria-label="add this resto">${icon}</button>
`
const createButtonRemoveFavorite = (icon) => `
  <button class="btn-favorite remove" aria-label="remove this resto">${icon}</button>
`
export { createButtonAddFavorite, createButtonRemoveFavorite }
