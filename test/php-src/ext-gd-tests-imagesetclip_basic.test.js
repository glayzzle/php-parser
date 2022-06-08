// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagesetclip_basic.phpt
  it("imagesetclip() - basic functionality", function () {
    expect(parser.parseCode("<?php\n// draw a clipped diagonal line\n$im = imagecreate(100, 100);\nimagecolorallocate($im, 0, 0, 0);\n$white = imagecolorallocate($im, 255, 255, 255);\nimagesetclip($im, 10,10, 89,89);\nimageline($im, 0,0, 99,99, $white);\n// save image for manual inspection\n// imagepng($im, __FILE__ . '.png');\n// verify that the clipping has been respected\nimagesetclip($im, 0,0, 99,99);\nvar_dump(imagecolorat($im, 9,9) !== $white);\nvar_dump(imagecolorat($im, 90,90) !== $white);\n?>")).toMatchSnapshot();
  });
});
