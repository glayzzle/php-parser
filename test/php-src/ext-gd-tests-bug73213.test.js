// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug73213.phpt
  it("Bug #73213 (Integer overflow in imageline() with antialiasing)", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . DIRECTORY_SEPARATOR . 'func.inc';\n$im = imagecreatetruecolor(32768, 1);\n$black = imagecolorallocate($im, 0, 0, 0);\nimageantialias($im, true);\nimageline($im, 0,0, 32767,0, $black);\ntest_image_equals_file(__DIR__ . DIRECTORY_SEPARATOR . 'bug73213.png', $im);\n?>")).toMatchSnapshot();
  });
});
