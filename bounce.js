function Bounce(x, y, 10, 0, Math.PI * 2) {
    this.x = x
    this.y = y

}
this.draw = function (color) {
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.x, this.y)
}
