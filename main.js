let ctx = document.getElementById("myCanvas").getContext("2d")
let bounce = new Bounce(50, 50, 2, 2, 15, 15, ctx)
let line = new Line(300, 590, ctx)
let gameScore = new Score(0)

window.addEventListener('keydown', (event) => {
  line.handleEvent(event);
}, false);

function checkColision(Bounce, Line) {
  /* if (Bounce.y + Bounce.h > 600 || Bounce.y <= 0) {
    Bounce.vy = -Bounce.vy
  } */
  if(Bounce.x + Bounce.w > 800 || Bounce.x <= 0){
    Bounce.vx =- Bounce.vx
  }

  if (((Bounce.y> Line.y - 15) 
  && (Bounce.x < Line.x + 150 && Bounce.x >=Line.x))
  ||(Bounce.y <=0)) {
    Bounce.vy = -Bounce.vy
  }
  if(Bounce.y > Line.y){
  alert("q")
  clearInterval(intervalId)
  Bounce.vx = 0;
  Bounce.vy = 0;
  }else{
    Bounce.x += Bounce.vx
    Bounce.y += Bounce.vy
  }
  
}

timeLoop = 200 / 30
var intervalId = setInterval(gameStart, timeLoop)
function gameStart() {
  bounce.ctx.clearRect(0, 0, 800, 600)
  bounce.draw("#f15b2d")
  line.draw()
  gameScore.drawScore(ctx)
  checkColision(bounce, line)
}

