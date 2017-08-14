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

  this.crossRectangle = function (x, y, hx, hy, color) {
    var ctx = this.context

    const oldWidth = ctx.lineWidth

    ctx.lineWidth = hx / 10
    ctx.strokeStyle = color
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + hx, y + hy)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x + hx, y)
    ctx.lineTo(x, y + hy)
    ctx.stroke()

    ctx.lineWidth = oldWidth
  }

  this.paintRectangle = function (x, y, hx, hy, color) {
    this.borderRectangle(x, y, hx, hy, color)
    this.fillRectangle(x, y, hx, hy, color)
  }
}
