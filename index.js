'use strict'

/**
 * Validates if the input is a possible Swedish company registration number
 * (organisationsnummer). Will not indicate if the number is actually
 * active or registered. Disregards if dash is misplaced.
 *
 * @param  {string} input   The number to check, could be either a string
 *                          with or without the dash, or a number without dash.
 * @return {boolean}        Returns true or false depending on whether the input
 *                          is a valid organisationsnummer or not.
 */
module.exports = (input) => {
  if (typeof input === 'string') {
    // Remove any non-digits (typically the dash)
    const normalized = input.replace(/\D/g, '')
    // Perform validation test
    return validateOrgNr(normalized)
  } else if (typeof input === 'number') {
    // If input is a number, turn into a string
    const normalized = '' + input
    // Perform validation test
    return validateOrgNr(normalized)
  } else {
    // Throw TypeError if not string or number
    throw new TypeError(`Expected a string or number, got ${typeof input}`)
  }
}

/**
 * Internal function to validate the number
 */
function validateOrgNr (number) {
  return (
    // Length must be 10 (without dash)
    number.length === 10 &&
    // Third digit must be at least 2
    parseInt(number.slice(2, 3)) >= 2 &&
    // Validate the last check digit
    validateChecksum(number)
  )
}

/**
 * Internal function to validate the checksum.
 * Insipred by https://github.com/bendrucker/fast-luhn
 */
function validateChecksum (number) {
  const array = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
  let length = number.length
  let bit = 1
  let sum = 0
  let value

  while (length) {
    value = parseInt(number.charAt(--length), 10)
    bit ^= 1
    sum += bit ? array[value] : value
  }

  return sum % 10 === 0
}
