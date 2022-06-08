// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagestring_basic.phpt
  it("Testing imagestring() of GD library", function () {
    expect(parser.parseCode("<?php\n$image = imagecreatetruecolor(180, 30);\n$white = imagecolorallocate($image, 255,255,255);\n$result = imagestring($image, 1, 5, 5, 'String Text', $white);\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/imagestring_basic.png', $image);\n?>")).toMatchSnapshot();
  });
});
