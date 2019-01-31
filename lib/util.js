const fs = require('fs')
const order = require('./order')

const sortKeys = (object) => {
  if (Array.isArray(object)) {
    return [ ...object ].sort()
  } else {
    return Object.keys(object)
      .sort()
      .reduce((p, c) => {
        p[c] = object[c]
        return p
      }, {})
  }
}

const writePackge = (obj, indent = 2) => {
  fs.writeFileSync('packge.json', JSON.stringify(obj, null, indent))
}

const sortPackge = (obj) => {
  const oldPackage = Object.assign({}, obj)

  // main fields
  const newPackage = order.reduce((p, c) => {
    p[c] = oldPackage[c]
    delete oldPackage[c]
    return p
  }, {})

  // extra fields
  Object.keys(oldPackage).forEach((field) => {
    newPackage[field] = oldPackage[field]
    delete oldPackage[field]
  })

  // sort sub objects
  return sortKeys(newPackage)
}

module.exports = {
  sortPackge,
  writePackge
}
