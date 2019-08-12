'use strict'

/**
 * Validates if the input is a possible Swedish company registration number
 * (organisationsnummer). Will not indicate if the number is actually
 * active or registered.
 *
 * @param  {string} input   The number to check, could be either a string
 *                          with or without the dash, or a number without dash.
 * @return {boolean}        Returns true or false depending on whether the input
 *                          is a valid organisationsnummer or not.
 */
module.exports = (input) => {
  // Only accept a string or number.
  if (
    typeof input !== 'string' && // Input must be either string...
    typeof input !== 'number' // ...or number
  ) {
    // Throw TypeError if not string or number
    throw new TypeError(`Expected a string or number, got ${typeof input}`)
  }

  let normalized

  // Normalize the input, if it is a string
  if (typeof input === 'string') {
    normalized = input
      .replace(/\D/g, '') // Remove any non-digits (typically the dash)
  }

  // If input is a number, turn into a string
  if (typeof input === 'number') {
    normalized = '' + input
  }

  // Return true or false if valid or not
  return (
    normalized.length === 10 && // Length must be 10 (without dash)
    parseInt(normalized.slice(2, 3)) >= 2 && // Third numeral must be at least 2
    validateChecksum(normalized) // Validate the last check digit
  )
}

/*
* Internal function to validate luhn.
* Insipred by https://github.com/bendrucker/fast-luhn
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
