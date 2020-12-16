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
    this.handleEvent = function (evt) {
        switch (evt.keyCode) {
            case 37:
                if (this.x - 40 >= 0) {
                    this.x -= 40;
                }
                break;
            case 39:
                if (this.x + 150 + 40 <= 800) {
                    this.x += 40;
                }
                break;
        }
    }
}