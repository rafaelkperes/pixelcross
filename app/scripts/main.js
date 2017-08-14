const pxCanvasId = 'pixelcross-canvas'
const pxGridSize = 350
var   pxState

$( document ).ready(function() {
  pxState = new Pixelcross(pxCanvasId, pxGridSize)
  pxState.init()
});
