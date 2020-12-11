let ctx = document.getElementById("myCanvas").getContext("2d");
let bounce = new Bounce (240, 290, 10, 0, Math.PI * 2)
timeLoop = 10;
setInterval(gameStart, timeLoop)
function gameStart() {
  bounce.ctx.cleaRect (0, 0, 480, 320)
  bounce.move()
  bounce.draw("#f15a29")
}