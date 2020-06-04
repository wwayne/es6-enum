/* globals chai, describe, it, mocha, Enum */
/* eslint-disable-next-line no-unused-vars,no-undef */

const main = () => {
  const Colors = new Enum('red', 'blue', 'green')

  mocha.setup('bdd')

  const should = chai.should()

  describe('Test "red"', function () {
    it('The color "red" exists', () => {
      should.exist(Colors.red)
    })
  })

  describe('Test "blue"', function () {
    it('The color "blue" exists', () => {
      should.exist(Colors.blue)
    })
  })

  describe('Test "green"', function () {
    it('The color "green" exists', () => {
      should.exist(Colors.green)
    })
  })

  describe('Test "yellow"', function () {
    it('The color "yellow" does not exist', () => {
      should.not.exist(Colors.yellow)
    })
  })

  mocha.run()
}

window.addEventListener('DOMContentLoaded', main)
