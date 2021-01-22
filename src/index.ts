import { writePackage, sortPackage } from './util'

const parseArgs = (argv) => {
  type Opts = { [key: string]: number | string | boolean }
  const opts: Opts = {}

  argv.forEach((x, i) => {
    switch (x) {
      case '-i':
      case '-indent':
      case '--indent':
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
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

export default () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const obj = require(process.cwd() + '/package.json')
  const fixed = sortPackage(obj)
  // @ts-ignore
  writePackage(fixed, opts.indent)
}
