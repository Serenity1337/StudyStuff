let person = {
  eat: function () {
    console.log('Im full')
  },

  sleep: function () {
    console.log('Im rested')
  },

  init: function (name, wears) {
    this.name = name
    this.wears = wears
    return this
  },
}

let wilton = Object.create(person).init('Wilton', 'The Pants')

let shelly = Object.create(person).init('shelly', 'the shorts')

let wiltonJr = Object.create(wilton).init('wilton jr', 'the onesie')

wiltonJr.eat()
console.log(wiltonJr.wears)

console.log(Object.getPrototypeOf(wiltonJr) === wilton)
