(function () {
  'use strict';

  describe('Pixelcross game', function () {
    describe('Pixel Data Structure', function () {
      it('starts being EMPTY', function () {
        var pixel = new Pixel()
        expect(pixel.state).to.equal(PixelState.EMPTY)
      });
    });
  });
})();
