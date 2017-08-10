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

var PixelState = {
  EMPTY   : 0,
  FILLED  : 1,
  CROSSED : 2
}

var Pixel = function() {
  this.state = PixelState.EMPTY

  this.nextState = function() {
    switch (this.state) {
      case PixelState.EMPTY:
        this.state = PixelState.FILLED
        break
      case PixelState.FILLED:
        this.state = PixelState.CROSSED
        break
      case PixelState.CROSSED:
      default:
        this.state = PixelState.EMPTY
    }
  }
}
