import { writePackage, sortPackage } from './util'

const args = process.argv.slice(2)

const indent =
  args[0] &&
  args[1] &&
  ['-i', '-indent', '--indent'].includes(args[0]) &&
  ['2', '4', 'tab'].includes(args[1])
    ? args[1] === 'tab'
      ? '\t'
      : parseInt(args[1], 10)
    : 2

export default () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const obj = require(process.cwd() + '/package.json')
  const fixed = sortPackage(obj)
  // @ts-ignore
  writePackage(fixed, indent)
}
