let ctx = document.getElementById("myCanvas").getContext("2d")
let bounce = new Bounce(50, 50, 2, 2, 15, 15, ctx)
let line = new Line(300, 590, ctx)
timeLoop = 20 / 30
setInterval(gameStart, timeLoop)
function gameStart() {
  bounce.ctx.clearRect(0, 0, 800, 600)
  bounce.move()
  bounce.draw("#f15b2d")

  line.draw()
}