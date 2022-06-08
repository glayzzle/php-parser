// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imageconvolution_error2.phpt
  it("Testing wrong array size 2x3 in imageconvolution() of GD library", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/func.inc';\n$image = imagecreatetruecolor(180, 30);\n// Writes the text and apply a gaussian blur on the image\nimagestring($image, 5, 10, 8, 'Gaussian Blur Text', 0x00ff00);\n$gaussian = array(\n    array(1.0, 2.0, 1.0),\n    array(2.0, 4.0, 2.0)\n);\ntrycatch_dump(\n    fn() => imageconvolution($image, $gaussian, 16, 0)\n);\n?>")).toMatchSnapshot();
  });
});
