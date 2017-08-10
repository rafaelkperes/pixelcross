const pxcanvasid = 'pixelcross-canvas'
var   pxState

$( document ).ready(function() {
  pxState = new Pixelcross(pxcanvasid)
  pxState.init()
});

var Canvas2dPainter = function(canvasElement) {
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

var Pixelcross = function(canvasId) {
  this.canvas  = document.getElementById(canvasId)
  if (this.canvas)
    this.painter = new Canvas2dPainter(this.canvas)

  this.init = function() {
    var painter = this.painter;

    painter.fillRectangle(30, 30, 20, 20, 'green')

    painter.borderRectangle(60, 60, 20, 20, 'purple')

    painter.paintRectangle(90, 90, 20, 20, 'black')
  };
}
