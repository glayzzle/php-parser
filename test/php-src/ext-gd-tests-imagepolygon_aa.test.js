// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagepolygon_aa.phpt
  it("antialiased imagepolygon()", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . DIRECTORY_SEPARATOR . 'func.inc';\n$im = imagecreatetruecolor(100, 100);\n$white = imagecolorallocate($im, 255, 255, 255);\n$black = imagecolorallocate($im, 0, 0, 0);\nimagefilledrectangle($im, 0,0, 99,99, $white);\nimageantialias($im, true);\nimagepolygon($im, [10,10, 49,89, 89,49], $black);\ntest_image_equals_file(__DIR__ . DIRECTORY_SEPARATOR . 'imagepolygon_aa.png', $im);\n?>")).toMatchSnapshot();
  });
});
