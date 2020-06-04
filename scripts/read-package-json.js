const fs = require('fs')
const path = require('path')

/**
 * A module to get package informations from package.json
 * @module getPackageJson
 * @param {...string} keys from package.json if no arguments passed it returns package.json content as object
 * @returns {object} with given keys or content of package.json as object
 */

/**
 * Returns package info
 */
const readPackageJson = function (...args) {
  const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))

  if (!args.length) {
    return packageJson
  }

  return args.reduce((out, key) => {
    out[key] = packageJson[key]
    return out
  }, {})
}

module.exports = readPackageJson
