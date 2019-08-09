'use strict'

module.exports = (input) => {
  // Only accept a string or number.
  if (
    typeof input !== 'string' &&
    typeof input !== 'number'
  ) {
    throw new TypeError(`Expected a string, got ${typeof input}`)
  }

  let normalized

  // Normalize the input, if it is a string
  if (typeof input === 'string') {
    normalized = input
      .replace(/\D/g, '') // Remove any non-digits (typically the dash)
  }

  // Normalize the input, if it is a number
  if (typeof input === 'number') {
    normalized = '' + input // Turn the number into a string
  }

  return (
    normalized.length === 10 && // Length must be 10 (without dash)
    parseInt(normalized.slice(2, 3)) >= 2 && // Third numeral must be at least 2
    validateChecksum(normalized) // Validate the last check digit
  )
}

/*
* Internal function to validate luhn.
* Based on https://github.com/bendrucker/fast-luhn
*/
function validateChecksum (number) {
  var length = number.length
  var bit = 1
  var sum = 0
  var value
  var array = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]

  while (length) {
    value = parseInt(number.charAt(--length), 10)
    bit ^= 1
    sum += bit ? array[value] : value
  }

  return sum % 10 === 0
}
