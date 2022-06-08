// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecolorset_basic.phpt
  it("Test imagecolorset() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n// Create a 300x100 image\n$im = imagecreate(300, 100);\n// Set the background to be red\nimagecolorallocate($im, 255, 0, 0);\n// Get the color index for the background\n$bg = imagecolorat($im, 0, 0);\n// Set the background to be blue\nimagecolorset($im, $bg, 0, 0, 255);\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/imagecolorset_basic.png', $im);\nimagedestroy($im);\n?>")).toMatchSnapshot();
  });
});
