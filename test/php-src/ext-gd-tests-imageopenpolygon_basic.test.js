// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imageopenpolygon_basic.phpt
  it("imageopenpolygon(): basic test", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . DIRECTORY_SEPARATOR . 'func.inc';\n$im = imagecreatetruecolor(100, 100);\n$white = imagecolorallocate($im, 255, 255, 255);\n$black = imagecolorallocate($im, 0, 0, 0);\n$red = imagecolorallocate($im, 255, 0, 0);\n$green = imagecolorallocate($im, 0, 128, 0);\n$blue = imagecolorallocate($im, 0, 0, 255);\nimagefilledrectangle($im, 0,0, 99,99, $white);\nimageopenpolygon($im, [10,10, 49,89, 89,10], $black);\nimageopenpolygon($im, [10,89, 35,10, 60,89, 85,10], $red);\nimageopenpolygon($im, [10,49, 30,89, 50,10, 70,89, 90,10], $green);\nimageopenpolygon($im, [10,50, 25,10, 40,89, 55,10, 80,89, 90,50], $blue);\ntest_image_equals_file(__DIR__ . DIRECTORY_SEPARATOR . 'imageopenpolygon.png', $im);\n?>")).toMatchSnapshot();
  });
});
