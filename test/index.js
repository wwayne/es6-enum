/**
 * Test env: node 4.2.1
 */
'use strict'

const test = require('tape')
const Enum = require('../dist')
const whatEver = require('../dist')

const ORIENTATION = Enum('NORTH', 'SOURTH', 'WEST', 'EAST');
const ORIEN = Enum('NORTH', 'SOURTH', 'WEST', 'EAST');

test('Enum can import as other name', function(t) {
  t.deepEqual(Enum, whatEver);
  t.end()
})

test('Enum case should be equal', function(t) {
  t.equal(ORIENTATION.NORTH, ORIENTATION.NORTH);
  t.end()
})

test('Different enum case with same name should not be equal', function(t) {
  t.notEqual(ORIENTATION.NORTH, ORIEN.NORTH);
  t.end()
})