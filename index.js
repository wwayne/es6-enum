export function Enum() {

  if (!(this instanceof Enum)) {
    return new Enum(...Object.values(arguments));
  }

  let args = this.deepCopy(Array.prototype.slice.call(arguments))
  if (Object.prototype.toString.call(args) === "[object Object]") {
    args = Object.values(args);
  }

  args.forEach((prams) => {
    this[prams] = Symbol(prams);
  })

}

Enum.prototype = {
  constructor: Enum,
  deepCopy: function (target) {

    let result;
    const type = Object.prototype.toString.call(target);

    switch(type) {
      case "[object Object]":
        result = {};
        for(let key in target) {
          result[key] = getValue(target[key]);
        }
        break
      case "[object Array]":
        result = [];
        for(let [key, value] of target.entries()) {
          result[key] = getValue(value);
        }
        break
      default:
        result = null;
    }

    function getValue(value) {
      if(typeof value === "object") {
          return deepCopy(value);
      }
      return value;
    }

    return result;
  }
}

export default Enum




