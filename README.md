# sortpack

Organize your package.json

It's like Prettier for your package.json. Inspired by fixpack, but actively maintained!

[![Support with PayPal](https://img.shields.io/badge/paypal-donate-yellow.png)](https://paypal.me/zacanger) [![Patreon](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/zacanger) [![ko-fi](https://img.shields.io/badge/donate-KoFi-yellow.svg)](https://ko-fi.com/U7U2110VB)

--------

## Installation

`npm i -D sortpack`

## Usage

`sortpack`

Add to your package.json:

```
"scripts": {
  "something": "sortpack"
}
```

Options:

```
-i [--indent] # either the string 'tab', or any number
```

Use with `husky` and `lint-staged` for automated goodness:

```
npm i -D husky sortpack lint-staged

// add to package.json:
  "lint-staged": {
    "package.json": [
      "sortpack"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
```

[LICENSE](./LICENSE.md)
