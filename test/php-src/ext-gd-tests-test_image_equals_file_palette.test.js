// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/test_image_equals_file_palette.phpt
  it("test_image_equals_file(): comparing palette images", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . DIRECTORY_SEPARATOR . 'func.inc';\n$im = imagecreate(10, 10);\nimagecolorallocate($im, 255, 255, 255);\n$red = imagecolorallocate($im, 255, 0, 0);\nimagefilledrectangle($im, 3,3, 7,7, $red);\n$filename = __DIR__ . DIRECTORY_SEPARATOR . 'test_image_equals_file_palette.png';\nimagepng($im, $filename);\n$im = imagecreate(10, 10);\nimagecolorallocate($im, 255, 255, 255);\n$blue = imagecolorallocate($im, 0, 0, 255);\nimagefilledrectangle($im, 3,3, 7,7, $blue);\ntest_image_equals_file($filename, $im);\n$im = imagecreate(10, 10);\nimagecolorallocate($im, 255, 255, 255);\nimagecolorallocate($im, 0, 0, 0);\n$red = imagecolorallocate($im, 255, 0, 0);\nimagefilledrectangle($im, 3,3, 7,7, $red);\ntest_image_equals_file($filename, $im);\n?>")).toMatchSnapshot();
  });
});
