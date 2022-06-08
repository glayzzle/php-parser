// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug52070.phpt
  it("Bug #52070 (imagedashedline() - dashed line sometimes is not visible)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreate(1200, 800);\n$background_color = imagecolorallocate($im, 40, 40, 40);\n$color = imagecolorallocate($im, 255, 255, 255);\nimagedashedline($im, 800, 400, 300, 400, $color);\nimagedashedline($im, 800, 400, 300, 800, $color);\nimagedashedline($im, 800, 400, 400, 800, $color);\nimagedashedline($im, 800, 400, 500, 800, $color);\nimagedashedline($im, 800, 400, 600, 800, $color);\nimagedashedline($im, 800, 400, 700, 800, $color);\nimagedashedline($im, 800, 400, 800, 800, $color);\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/bug52070.png', $im);\n?>")).toMatchSnapshot();
  });
});
