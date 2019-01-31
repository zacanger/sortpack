const { writePackage, sortPackage } = require('./util')

const args = process.argv.slice(2)

const indent = (
  args[0] &&
  args[1] &&
  [ '-i', '-indent', '--indent' ].includes(args[0]) &&
  [ '2', '4', 'tab' ].includes(args[1])
) ? (args[1] === 'tab' ? args[1] : parseInt(args[1], 0))
  : 2

module.exports = () => {
  const obj = require(process.cwd() + '/package.json')
  const fixed = sortPackage(obj)
  writePackage(fixed, indent)
}
