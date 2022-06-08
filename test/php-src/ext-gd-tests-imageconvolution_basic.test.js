// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imageconvolution_basic.phpt
  it("Testing imageconvolution() of GD library", function () {
    expect(parser.parseCode("<?php\n$image = imagecreatetruecolor(180, 30);\n// Writes the text and apply a gaussian blur on the image\nimagestring($image, 5, 10, 8, 'Gaussian Blur Text', 0x00ff00);\n$gaussian = array(\n    array(1.0, 2.0, 1.0),\n    array(2.0, 4.0, 2.0),\n    array(1.0, 2.0, 1.0)\n);\nimageconvolution($image, $gaussian, 16, 0);\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/imageconvolution_basic.png', $image);\n?>")).toMatchSnapshot();
  });
});
