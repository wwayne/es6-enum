/**
 * Test env: node 4.0.0
 */
'use strict'

const test = require('tape')
const Enum = require('../')
const whatEver = require('../')

const ORIENTATION = Enum('NORTH', 'SOUTH', 'WEST', 'EAST')
const ORIEN = Enum('NORTH', 'SOUTH', 'WEST', 'EAST')

test('Enum can import as other name', function(t) {
  t.deepEqual(Enum, whatEver)
  t.end()
})

test('Enum case should be equal', function(t) {
  t.equal(ORIENTATION.NORTH, ORIENTATION.NORTH)
  t.end()
})

test('Different enum case with same name should not be equal', function(t) {
  t.notEqual(ORIENTATION.NORTH, ORIEN.NORTH)
  t.end()
})
