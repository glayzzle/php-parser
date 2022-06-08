// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug43121.phpt
  it("Bug #43121 (gdImageFill with IMG_COLOR_TILED crashes httpd)", function () {
    expect(parser.parseCode("<?php\n$im = ImageCreate( 200, 100 );\n$black = ImageColorAllocate( $im, 0, 0, 0 );\n$im_tile = ImageCreateFromGif(__DIR__ . \"/bug43121.gif\" );\nImageSetTile( $im, $im_tile );\nImageFill( $im, 0, 0, IMG_COLOR_TILED );\nImageDestroy( $im );\nprint \"OK\";\n?>")).toMatchSnapshot();
  });
});
