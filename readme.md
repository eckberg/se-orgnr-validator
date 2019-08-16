# se-orgnr-validator

[![Build Status](https://travis-ci.com/eckberg/se-orgnr-validator.svg?branch=master)](https://travis-ci.com/eckberg/se-orgnr-validator)
[![npm](https://img.shields.io/npm/v/se-orgnr-validator)](https://www.npmjs.com/package/se-orgnr-validator)
[![Coverage Status](https://coveralls.io/repos/github/eckberg/se-orgnr-validator/badge.svg?branch=master)](https://coveralls.io/github/eckberg/se-orgnr-validator?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![GitHub](https://img.shields.io/github/license/eckberg/se-orgnr-validator)


Validator for Swedish company registration numbers (organisationsnummer) in Node.js.

Fast, small and no dependencies.

## Install

```
$ npm install se-orgnr-validator
```

## Usage

```js
const orgnrValidator = require('se-orgnr-validator')

orgnrValidator('556016-0680')
//=> true

orgnrValidator(5560160680)
//=> true

orgnrValidator(55610160680)
//=> false
```


## API

### orgnrValidator(input)

#### input

Type: `string`

The number to validate. Accepts either a string or an integer, meaning that you may omit the dash between the first 6 and the last 4 digits.

## Test

```
npm test
```

## Benchmark
This module was partly created since I needed a quick solution for validating Swedish company registration numbers that had OK performance and quality. After looking at some other options available, I found some issues with them. For your convenience, here is my summarised benchmark test. Please note however, that this module was not purely written for speed reasons, and could probably be improved even further.

Tested with the following datasets:

* 500 correct numbers (gathered from https://poit.bolagsverket.se)
* 1 000 000 generated numbers that were too long (but with correct checksum)
* 1 000 000 generated numbers that have either 0 or 1 as its third digit (but with correct lenght and checksum)
* 1 000 000 randomly generated numbers (but with correct lenght and checksum)
* 1 000 000 randomly generated numbers with incorrect checksum (but with correct lenght)

The beenchmark was performed towards:
* https://github.com/perarnborg/se-org-no

Tests made on Windows 10, 2.5GHz, 9GB RAM. Average of three iterations.

| | https://github.com/eckberg/se-orgnr-validator | https://github.com/perarnborg/se-org-no |
|-----------------|-------|-------|
| Correct numbers | 3ms   | 16ms  |
| Long numbers    | 160ms | 217ms |
| Third digit     | 121ms | 2.31s |
| Random          | 191ms | 1.70s |
| Checksum        | 190ms | 2.84s |
