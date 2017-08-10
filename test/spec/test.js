(function () {
  'use strict';

  describe('Pixelcross game', function () {
    describe('Pixel Data Structure', function () {
      it('starts being EMPTY', function () {
        var pixel = new Pixel()
        expect(pixel.state).to.equal(PixelState.EMPTY)
      });

      it('cicles correctly between states', function () {
        var pixel = new Pixel()
        expect(pixel.state).to.equal(PixelState.EMPTY)

        pixel.nextState()
        expect(pixel.state).to.equal(PixelState.FILLED)

        pixel.nextState()
        expect(pixel.state).to.equal(PixelState.CROSSED)

        pixel.nextState()
        expect(pixel.state).to.equal(PixelState.EMPTY)
      });
    });
  });
})();
