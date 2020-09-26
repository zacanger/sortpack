"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortPackage = exports.writePackage = void 0;
var fs = __importStar(require("fs"));
var order_1 = __importDefault(require("./order"));
var sortKeys = function (object) {
    if (Array.isArray(object)) {
        return __spreadArrays(object).sort();
    }
    else {
        return Object.keys(object)
            .sort()
            .reduce(function (p, c) {
            p[c] = object[c];
            return p;
        }, {});
    }
};
exports.writePackage = function (obj, indent) {
    if (indent === void 0) { indent = 2; }
    fs.writeFileSync('package.json', JSON.stringify(obj, null, indent) + '\n');
};
exports.sortPackage = function (obj) {
    var oldPackage = Object.assign({}, obj);
    // main fields
    var newPackage = order_1.default.reduce(function (p, c) {
        p[c] = oldPackage[c];
        delete oldPackage[c];
        return p;
    }, {});
    // extra fields
    Object.keys(oldPackage).forEach(function (field) {
        newPackage[field] = oldPackage[field];
        delete oldPackage[field];
    });
    // sort sub objects
    return Object.keys(newPackage).reduce(function (p, c) {
        p[c] =
            typeof newPackage[c] === 'object'
                ? sortKeys(newPackage[c])
                : newPackage[c];
        return p;
    }, {});
};
