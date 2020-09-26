import * as fs from 'fs'
import order from './order'

const sortKeys = (object) => {
  if (Array.isArray(object)) {
    return [...object].sort()
  } else {
    return Object.keys(object)
      .sort()
      .reduce((p, c) => {
        p[c] = object[c]
        return p
      }, {})
  }
}

export const writePackage = (obj, indent = 2) => {
  fs.writeFileSync('package.json', JSON.stringify(obj, null, indent) + '\n')
}

export const sortPackage = (obj) => {
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
  return Object.keys(newPackage).reduce((p, c) => {
    p[c] =
      typeof newPackage[c] === 'object'
        ? sortKeys(newPackage[c])
        : newPackage[c]
    return p
  }, {})
}
