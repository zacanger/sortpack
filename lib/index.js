"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var args = process.argv.slice(2);
var indent = args[0] &&
    args[1] &&
    ['-i', '-indent', '--indent'].includes(args[0]) &&
    ['2', '4', 'tab'].includes(args[1])
    ? args[1] === 'tab'
        ? '\t'
        : parseInt(args[1], 10)
    : 2;
exports.default = (function () {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    var obj = require(process.cwd() + '/package.json');
    var fixed = util_1.sortPackage(obj);
    // @ts-ignore
    util_1.writePackage(fixed, indent);
});
