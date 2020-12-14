function Line(x, y, ctx) {
    this.x = x
    this.y = y
    this.ctx = ctx

    this.draw = function () {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(this.x + 150, this.y);
        this.ctx.lineWidth = 5
        this.ctx.stroke();
    }
}