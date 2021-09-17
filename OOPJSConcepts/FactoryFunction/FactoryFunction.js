function createCircle(radius, location, isVisible) {
  return {
    radius,
    location,
    isVisible,
    draw() {
      console.log('draw')
    },
  }
}

const circle1 = createCircle(1, { x: 1, y: 2 }, true)
console.log(circle1)

const circle2 = createCircle(2, { x: 2, y: 2 }, false)

console.log(circle2)
