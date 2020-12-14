function Bounce(x, y, vx, vy, w, h, ctx) {
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    this.w = w
    this.h = h
    this.ctx = ctx
    this.move = function () {
        if (this.y + this.h > 600 || this.y <= 0) {
            this.vy = -this.vy
        }
        if (this.x + this.w > 800 || this.x <= 0) {
            this.vx = -this.vx
        }
        this.x += this.vx
        this.y += this.vy
    }
    this.draw = function (color) {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}
