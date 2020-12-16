let bounce = new Bounce(50, 50, 2, 2, 15, 15, ctx)
let line = new Line(300, 590, ctx)
let gameScore = new Score(0)

function checkColision(Bounce, Line) {
    if(Bounce.x + Bounce.w > 800 || Bounce.x <= 0){
      Bounce.vx =- Bounce.vx
    }
  
    if (((Bounce.y> Line.y - 15) 
    && (Bounce.x < Line.x + 150 && Bounce.x >=Line.x))
    ||(Bounce.y <=0)) {
      Bounce.vy = -Bounce.vy
    }
    if(Bounce.y > Line.y){
    alert("Game over")
    clearInterval(intervalId)
    Bounce.vx = 0;
    Bounce.vy = 0;
    }else{
      Bounce.x += Bounce.vx
      Bounce.y += Bounce.vy
    }
    
  }
  