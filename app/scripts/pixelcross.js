var Pixelcross = function(canvasId) {
  this.canvas = document.getElementById(canvasId)
  this.width = this.canvas.width
  this.height = this.canvas.height
  this.visualBoard = new VisualBoard(this.canvas, this.width, this.height)

  this.init = function() {
    var board = createArray(15, 15)
    board[3][3] = PixelState.FILLED
    board[4][4] = PixelState.CROSSED
    board[5][5] = PixelState.FILLED
    this.visualBoard.paintBoard(board)
    // painter.fillRectangle(30, 30, 20, 20, 'green')
    //
    // painter.borderRectangle(60, 60, 20, 20, 'purple')
    //
    // painter.paintRectangle(90, 90, 20, 20, 'black')
  }
}

var VisualBoard = function(canvas, width, height) {
  // Proportional constants
  const boardBorder = 2
  const pixelBorder = 1
  const pixelFill = 15

  // Attributes
  this.canvas = canvas
  this.width = width
  this.height = height

  // Methods
  this.paintBoard = function(board) {
    const painter = new CanvasPainter(this.canvas)

    const noOfRows = board.length
    const noOfColumns = board[0].length

    const pixelWidth = this.width / noOfRows
    const pixelHeight = this.height / noOfRows

    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[i].length; j++) {
        switch (board[i][j]) {
          case PixelState.FILLED:
            painter.fillRectangle(i*pixelHeight, j*pixelWidth, pixelHeight, pixelWidth, 'black')
            break
          case PixelState.CROSSED:
            painter.crossRectangle(i*pixelHeight, j*pixelWidth, pixelHeight, pixelWidth, 'black')
            break
        }
        painter.borderRectangle(i*pixelHeight, j*pixelWidth, pixelHeight, pixelWidth, 'gray')
      }
    }

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

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}
