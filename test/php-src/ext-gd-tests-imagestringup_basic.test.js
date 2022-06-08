// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagestringup_basic.phpt
  it("Testing imagestringup() of GD library", function () {
    expect(parser.parseCode("<?php\n$image = imagecreatetruecolor(180, 30);\n$white = imagecolorallocate($image, 255,255,255);\n$result = imagestringup($image, 1, 5, 25, 'Str', $white);\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/imagestringup_basic.png', $image);\n?>")).toMatchSnapshot();
  });
});
