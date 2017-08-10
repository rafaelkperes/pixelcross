const pxcanvasid = 'pixelcross-canvas';
var   pxState;

$( document ).ready(function() {
  pxState = new Pixelcross(pxcanvasid);
  pxState.init();
});

var Pixelcross = function(canvasid) {
  this.canvas  = undefined;
  this.context = undefined;

  this.init = function() {
    this.canvas  = document.getElementById(canvasid);
    this.context = this.canvas.getContext('2d');

    var ctx = this.context;

    ctx.fillStyle = 'green';
    ctx.fillRect(30, 30, 20, 20);

    ctx.fillStyle = 'purple';
    ctx.fillRect(60, 60, 20, 20);

    ctx.strokeStyle = 'darkgreen';
    ctx.strokeRect(60, 60, 20, 20);

    ctx.strokeStyle = 'black';
    ctx.strokeRect(90, 90, 20, 20);
  };
}
