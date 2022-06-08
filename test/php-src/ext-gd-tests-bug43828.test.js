// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug43828.phpt
  it("Bug #43828 (broken transparency of imagearc for truecolor in blendingmode)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatetruecolor(100,100);\n$transparent = imagecolorallocatealpha($im, 255, 255, 255, 80);\nimagefilledrectangle($im, 0,0, 99,99, $transparent);\n$color = imagecolorallocatealpha($im, 0, 255, 0, 100);\nimagefilledarc($im, 49, 49, 99,99, 0 , 360, $color, IMG_ARC_PIE);\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/bug43828.png', $im);\nimagedestroy($im);\n?>")).toMatchSnapshot();
  });
});
