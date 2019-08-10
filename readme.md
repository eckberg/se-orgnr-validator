# se-orgnr-validator

[![Build Status](https://travis-ci.com/eckberg/se-orgnr-validator.svg?branch=master)](https://travis-ci.com/eckberg/se-orgnr-validator)
[![Coverage Status](https://coveralls.io/repos/github/eckberg/se-orgnr-validator/badge.svg?branch=master)](https://coveralls.io/github/eckberg/se-orgnr-validator?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


Validator for Swedish company registration numbers (organisationsnummer) in Node.js


## Install

```
$ npm install se-orgnr-validator
```

## Usage

```js
const orgnrValidator = require('se-orgnr-validator')

orgnrValidator('556016-0680')
//=> true
```


## API

### orgnrValidator(input)

#### input

Type: `string`

The number to validate. Accepts either a string or an integer, meaning that you may omit the dash between the first 6 and the last 4 numerals.

## Test

```
npm test
```
