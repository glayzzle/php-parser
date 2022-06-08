// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug77943.phpt
  it("Bug #77943 (imageantialias($image, false); does not work)", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . '/func.inc';\n$width = 400;\n$height = 300;\n$im = imagecreatetruecolor($width, $height);\n$white = imagecolorallocate($im, 255, 255, 255);\n$blue = imagecolorallocate($im, 0, 0, 255);\nimageantialias($im, false);\nimagefilledrectangle($im, 0, 0, $width-1, $height-1, $white);\nimageline($im, 0, 0, $width, $height, $blue);\nimagesetthickness($im, 3);\nimageline($im, 10, 0, $width, $height-10, $blue);\ntest_image_equals_file(__DIR__ . '/bug77943.png', $im);\n?>")).toMatchSnapshot();
  });
});
