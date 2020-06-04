/**
 * Test env: node 4.0.0
 */
'use strict'

const test = require('tape')
const Enum = require('../build/enum')
const whatEver = require('../build/enum')

const Orientation = new Enum('NORTH', 'SOUTH', 'WEST', 'EAST')
const Orien = new Enum('NORTH', 'SOUTH', 'WEST', 'EAST')

test('Enum can import as other name', function (t) {
  t.deepEqual(Enum, whatEver)
  t.end()
})

test('Enum case should be equal', function (t) {
  t.equal(Orientation.NORTH, Orientation.NORTH)
  t.end()
})

test('Different enum case with same name should not be equal', function (t) {
  t.notEqual(Orientation.NORTH, Orien.NORTH)
  t.end()
})
