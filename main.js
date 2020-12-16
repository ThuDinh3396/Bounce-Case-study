let ctx = document.getElementById("myCanvas").getContext("2d")
timeLoop = 200 / 30
window.addEventListener('keydown', (event) => {
  line.handleEvent(event);
}, false);
let intervalId = setInterval(gameStart, timeLoop)
function gameStart() {
  bounce.ctx.clearRect(0, 0, 800, 600)
  bounce.draw("#f15b2d")
  line.draw()
  gameScore.drawScore(ctx)
  checkColision(bounce, line)
}

