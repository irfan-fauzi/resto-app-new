/* eslint-disable no-undef */
// /* eslint-disable import/prefer-default-export */
const itActAsFavoriteRestoModel = (favoriteResto) => {
  // test 1
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

  // test 2
  it('harusnya menolak resto untuk di tambahkan jika tidak memiliki properti yang benar', async () => {
    favoriteResto.putResto({ aProperty: 'property' })
    expect(await favoriteResto.getAllResto()).toEqual([])
  })

  // test 3
  it('harusnya dapat mengembalikan semua resto yang telah difavoritkan', async () => {
    favoriteResto.putResto({ id: 1 })
    favoriteResto.putResto({ id: 2 })
    expect(await favoriteResto.getAllResto())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ])
  })

  // test 4
  it('harusnya dapat menghapus resto', async () => {
    favoriteResto.putResto({ id: 1 })
    favoriteResto.putResto({ id: 2 })
    favoriteResto.putResto({ id: 3 })

    await favoriteResto.deleteResto(1)
    expect(await favoriteResto.getAllResto())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ])
  })

  // test 5
  it('should handle request to remove a resto even though the resto has not been added', async () => {
    favoriteResto.putResto({ id: 1 })
    favoriteResto.putResto({ id: 2 })
    favoriteResto.putResto({ id: 3 })

    await favoriteResto.deleteResto(4)
    expect(await favoriteResto.getAllResto()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ])
  })
}

// eslint-disable-next-line import/prefer-default-export
export { itActAsFavoriteRestoModel }
