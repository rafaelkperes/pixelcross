var Pixelcross = function(canvasId) {
  this.canvas  = document.getElementById(canvasId)
  if (this.canvas)
    this.painter = new CanvasPainter(this.canvas)

  this.init = function() {
    var painter = this.painter;

    painter.fillRectangle(30, 30, 20, 20, 'green')

    painter.borderRectangle(60, 60, 20, 20, 'purple')

    painter.paintRectangle(90, 90, 20, 20, 'black')
  }
}
