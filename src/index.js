class Enum {
  constructor (...names) {
    names.forEach((name) => {
      this[name] = Symbol(name)
    })
  }
}

module.exports = Enum
