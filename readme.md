# se-orgnr-validator [![Build Status](https://travis-ci.com/eckberg/se-orgnr-validator.svg?branch=master)](https://travis-ci.com/eckberg/se-orgnr-validator)

Node validator for Swedish company registration numbers (organisationsnummer)


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

Type: `string` or `integer`

The number to validate. Can be either a string or an integer, meaning that you may omit the dash between the first 6 and the last 4 numerals.

## Test

```
npm test
```
