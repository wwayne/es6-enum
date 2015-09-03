import test from 'tape'
import Enum from '../index'
import whatEver from '../index'

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