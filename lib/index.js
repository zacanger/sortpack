// const { writePackage, sort } = require('./util')

const args = process.argv.slice(2)

// eslint-disable-next-line
let indent = 2
if (
  args[0] &&
  args[1] &&
  [ '-i', '-indent', '--indent' ].includes(args[0]) &&
  [ '2', '4', 'tab' ].includes(args[1])
) {
  indent = args[1] === 'tab' ? args[1] : parseInt(args[1], 0)
}

module.exports = () => {
  // eslint-disable-next-line
  const obj = require(process.cwd() + '/package.json')
  console.dir(obj)
  // writePackage(obj, indent)
}
