function Bounce(x, y, vx, vy, w, h, ctx) {
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    this.w = w
    this.h = h
    this.ctx = ctx

    this.draw = function (color) {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}
