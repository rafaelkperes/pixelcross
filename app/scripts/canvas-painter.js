var CanvasPainter = function(canvasElement) {
  this.canvas  = canvasElement
  this.context = this.canvas.getContext('2d')

  this.borderRectangle = function (x, y, hx, hy, color) {
    var ctx = this.context
    ctx.strokeStyle = color
    ctx.strokeRect(x, y, hx, hy)
  }

  this.fillRectangle = function (x, y, hx, hy, color) {
    var ctx = this.context
    ctx.fillStyle = color
    ctx.fillRect(x, y, hx, hy)
  }

  this.paintRectangle = function (x, y, hx, hy, color) {
    this.borderRectangle(x, y, hx, hy, color)
    this.fillRectangle(x, y, hx, hy, color)
  }
}
