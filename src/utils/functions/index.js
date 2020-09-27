const { shell } = require('electron')
const { resolve } = require ('path')

exports.linky = function handleOpenLink (url) {
   shell.openExternal(url)
}

exports.imge = function getImageByDensity (fileName, density, dirPath = './src/assets') {
   const file = fileName.split('.')

   !file[1] ? file[1] = '.png' : file[1] = '.'+file[1]

   const path = resolve(dirPath, file[0])+'@'+density+'x'+file[1]
   return path
}