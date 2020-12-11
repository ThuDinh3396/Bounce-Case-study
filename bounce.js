function Bounce(x, y, dx, radius) {
    this.x = x
    this.y = y
    this.dx = dx
    this.radius = radius
}
this.move = function () {
    if (this.y + this.dy > canvas.height || this.y + this.dy < 0) {
        this.dy = -this.dy;
    }
    if (this.x + this.dx > canvas.width || this.x + this.dx < 0) {
        this.dx = -this.dx;
    }
}
this.draw = function (color) {
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.arc(this.x, this.y, this.dx, this.radius)
}
