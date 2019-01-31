const { hasFlag, args } = require('zrgs')
const { writePackage, sort } = require('./util')

module.exports = (obj) => {
  const indent = hasFlag('indent') ? args[1] : 2
  writePackage(obj, indent)
}
