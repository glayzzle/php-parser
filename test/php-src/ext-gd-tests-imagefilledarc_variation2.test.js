// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagefilledarc_variation2.phpt
  it("Testing passing negative start angle to imagefilledarc() of GD library", function () {
    expect(parser.parseCode("<?php\n$image = imagecreatetruecolor(100, 100);\n$white = imagecolorallocate($image, 0xFF, 0xFF, 0xFF);\n//create an arc and fill it with white color\nimagefilledarc($image, 50, 50, 30, 30, -25, 25, $white, IMG_ARC_PIE);\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/imagefilledarc_variation2.png', $image);\n?>")).toMatchSnapshot();
  });
});
