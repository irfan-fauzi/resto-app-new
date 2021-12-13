const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const target = path.resolve(__dirname, 'src/public/images/heros')
const destination = path.resolve(__dirname, 'src/public/images/heros')

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination)
}

fs.readdirSync(target).forEach((image) => {
  // ubah ukuran gambar dengan lebar 800px, dengan prefix large
  sharp(`${target}/${image}`).resize(800)
    .toFile(path.resolve(__dirname, `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`))
  // ubah ukuran gambar dengan lebar 400px, dengan prefix small
  sharp(`${target}/${image}`).resize(400)
    .toFile(path.resolve(__dirname, `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`))
})
