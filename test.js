/* eslint-env jest */

const orgnrValidator = require('.')

test('can take string', () => {
  expect(orgnrValidator('556016-0680')).toBe(true)
  expect(orgnrValidator('202100-5489')).toBe(true)
})

test('can take number', () => {
  expect(orgnrValidator(5560160680)).toBe(true)
  expect(orgnrValidator(2021005489)).toBe(true)
})

test('throws error if not string or number', () => {
  expect(() => { orgnrValidator(true) }).toThrow()
  expect(() => { orgnrValidator(null) }).toThrow()
  expect(() => { orgnrValidator(undefined) }).toThrow()
  expect(() => { orgnrValidator({ no: 5560160680 }) }).toThrow()
  expect(() => { orgnrValidator(['2021005489']) }).toThrow()
})

test('not valid if too long', () => {
  expect(orgnrValidator(55610160680)).toBe(false)
  expect(orgnrValidator('5560161-0680')).toBe(false)
})

test('not valid if third numeral is lower than 2', () => {
  expect(orgnrValidator('550016-0680')).toBe(false)
  expect(orgnrValidator('201100-5489')).toBe(false)
})

test('not valid if invalid checksum', () => {
  expect(orgnrValidator('556016-0681')).toBe(false)
  expect(orgnrValidator('202100-5488')).toBe(false)
})
