let ctx = document.getElementById("myCanvas").getContext("2d")
let bounce = new Bounce(50, 50, 2, 2, 15, 15, ctx)
let line = new Line(300, 590, ctx)
window.addEventListener('keydown', (event) => {
  line.handleEvent(event);
}, false);

timeLoop = 200 / 30
setInterval(gameStart, timeLoop)
function gameStart() {
  bounce.ctx.clearRect(0, 0, 800, 600)
  bounce.move()
  bounce.draw("#f15b2d")
  line.draw()
}
