# sortpack

Organize your package.json

It's like Prettier for your package.json. Inspired by fixpack, but actively maintained!

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
