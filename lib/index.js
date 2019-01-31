const { writePackage, sort } = require('./util')

const args = process.argv.slice(2)

let indent = 2
if (
  args[0] &&
  args[1] &&
  ['-i', '-indent', '--indent'].includes(args[0]) &&
  ['2', '4', 'tab'].includes(args[1])
) {
  indent = args[1] === 'tab' ? args[1] : parseInt(arg[1], 0)
}

module.exports = () => {
  const obj = require(process.cwd() + '/' + 'package.json')
  writePackage(obj, indent)
}
