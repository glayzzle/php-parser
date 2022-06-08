// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagerectangle_basic.phpt
  it("Testing imagerectangle() of GD library", function () {
    expect(parser.parseCode("<?php\n// Create a image\n$image = imagecreatetruecolor( 100, 100 );\n// Draw a rectangle\nimagerectangle( $image, 0, 0, 50, 50, imagecolorallocate($image, 255, 255, 255) );\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/imagerectangle_basic.png', $image);\n?>")).toMatchSnapshot();
  });
});
