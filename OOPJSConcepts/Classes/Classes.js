class Bubble {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  move() {
    this.x = this.x + 5
    this.y = this.y + 5
  }
}
const bubble = new Bubble(30, 50)
bubble.move()
console.log(bubble.x, bubble.y)
