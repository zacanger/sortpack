const { writePackage, sortPackage } = require('./util')

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

      // more options could go here
      default:
        break
    }
  })

  return opts
}

const opts = parseArgs(process.argv.slice(2))

module.exports = () => {
  const obj = require(process.cwd() + '/package.json')
  const fixed = sortPackage(obj)
  writePackage(fixed, opts.indent)
}
