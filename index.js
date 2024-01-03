#!/usr/bin/env node

const fs = require('fs')

const order = [
  'name',
  'description',
  'version',
  'private',
  'author',
  'contributors',
  'funding',
  'license',
  'main',
  'module',
  'jsnext:main',
  'files',
  'preferGlobal',
  'bin',
  'scripts',
  'homepage',
  'repository',
  'bugs',
  'keywords',
  'engines',
  'os',
  'dependencies',
  'devDependencies'
]

const sortKeys = (object) =>
  Array.isArray(object)
    ? [...object].sort()
    : Object.keys(object)
      .sort()
      .reduce((p, c) => {
        p[c] = object[c]
        return p
      }, {})

const writePackage = (obj, indent = 2) => {
  fs.writeFileSync('package.json', JSON.stringify(obj, null, indent) + '\n')
}

const sortPackage = (obj) => {
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

const parseArgs = (argv) => {
  const opts = {}

  argv.forEach((x, i) => {
    switch (x) {
      case '-i':
      case '-indent':
      case '--indent':
        // eslint-disable-next-line no-case-declarations
        const indentOpt = argv[i + 1]
        if (indentOpt === 'tab') {
          opts.indent = '\t'
        } else {
          const n = parseInt(indentOpt, 10)
          if (!isNaN(n)) {
            opts.indent = n
          } else {
            opts.indent = 2
          }
        }
        break
      default:
        break
    }
  })

  return opts
}

const main = () => {
  const opts = parseArgs(process.argv.slice(2))
  const obj = require(process.cwd() + '/package.json')
  const fixed = sortPackage(obj)
  writePackage(fixed, opts.indent)
}

main()
