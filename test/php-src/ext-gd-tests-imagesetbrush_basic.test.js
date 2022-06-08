// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagesetbrush_basic.phpt
  it("Test imagesetbrush() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n// Create the brush image\n$img = imagecreate(10, 10);\n// Create the main image, 100x100\n$mainimg = imagecreatetruecolor(100, 100);\n$white = imagecolorallocate($img, 255, 0, 0);\nimagefilledrectangle($img, 0, 0, 299, 99, $white);\n// Set the brush\nimagesetbrush($mainimg, $img);\n// Draw a couple of brushes, each overlaying each\nimageline($mainimg, 50, 50, 50, 60, IMG_COLOR_BRUSHED);\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/imagesetbrush_basic.png', $mainimg);\n?>")).toMatchSnapshot();
  });
});
