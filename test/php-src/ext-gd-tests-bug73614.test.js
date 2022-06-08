// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug73614.phpt
  it("Bug #73614 (gdImageFilledArc() doesn't properly draw pies)", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . '/func.inc';\n$image = imagecreatetruecolor(500, 500);\n$white    = imagecolorallocate($image, 0xFF, 0xFF, 0xFF);\n$navy     = imagecolorallocate($image, 0x00, 0x00, 0x80);\n$red      = imagecolorallocate($image, 0xFF, 0x00, 0x00);\nimagefilledarc($image, 250, 250, 500, 250, 0, 88, $white, IMG_ARC_PIE);\nimagefilledarc($image, 250, 250, 500, 250, 88, 91 , $navy, IMG_ARC_PIE);\nimagefilledarc($image, 250, 250, 500, 250, 91, 360 , $red, IMG_ARC_PIE);\ntest_image_equals_file(__DIR__ . '/bug73614.png', $image);\n?>")).toMatchSnapshot();
  });
});
