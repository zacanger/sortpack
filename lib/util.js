const fs = require('fs')

const sort = (object) => {
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

module.exports = {
  sort,
  writePackge
}
