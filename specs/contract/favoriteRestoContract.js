/* eslint-disable no-undef */
// /* eslint-disable import/prefer-default-export */
// /* eslint-disable no-undef */
const itActAsFavoriteRestoModel = (favoriteResto) => {
  it('harusnya mengembalikan resto yang telah di favoritkan', async () => {
    favoriteResto.putResto({ id: 1 })
    favoriteResto.putResto({ id: 2 })

    expect(await favoriteResto.getResto(1))
      .toEqual({ id: 1 })
    expect(await favoriteResto.getResto(2))
      .toEqual({ id: 2 })
    expect(await favoriteResto.getResto(3))
      .toEqual(undefined)
  })
}

// eslint-disable-next-line import/prefer-default-export
export { itActAsFavoriteRestoModel }
