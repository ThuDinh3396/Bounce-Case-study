let Score = function (score){
    this.score = score;
    this.drawScore = function (ctx) {
        ctx.font = "24px Arial";
        ctx.fillText("Score: ", 5, 30);
        ctx.fillText(this.score, 80, 30);
        ctx.stroke();
    }
}