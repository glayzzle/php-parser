// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagefilledellipse_basic.phpt
  it("Testing imagefilledellipse() of GD library", function () {
    expect(parser.parseCode("<?php\n$image = imagecreatetruecolor(100, 100);\n$white = imagecolorallocate($image, 0xFF, 0xFF, 0xFF);\n//create an ellipse and fill it with white color\nimagefilledellipse($image, 50, 50, 40, 30, $white);\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/imagefilledellipse_basic.png', $image);\n?>")).toMatchSnapshot();
  });
});
