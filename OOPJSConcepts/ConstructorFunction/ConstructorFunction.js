// We use pascal naming convention

function Circle(radius) {
  this.radius = radius
  this.draw = function () {
    console.log('draw')
  }
}
const circle1 = new Circle(1)
circle1.draw()
