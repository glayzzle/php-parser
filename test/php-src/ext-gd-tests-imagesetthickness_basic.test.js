// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagesetthickness_basic.phpt
  it("Testing imagetruecolortopalette() of GD library", function () {
    expect(parser.parseCode("<?php\n// Create a 200x100 image\n$image = imagecreatetruecolor(200, 100);\n$white = imagecolorallocate($image, 0xFF, 0xFF, 0xFF);\n$black = imagecolorallocate($image, 0x00, 0x00, 0x00);\n// Set the background to be white\nimagefilledrectangle($image, 0, 0, 299, 99, $white);\n// Set the line thickness to 5\nimagesetthickness($image, 5);\n// Draw the rectangle\nimagerectangle($image, 14, 14, 185, 85, $black);\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/imagesetthickness_basic.png', $image);\n?>")).toMatchSnapshot();
  });
});
