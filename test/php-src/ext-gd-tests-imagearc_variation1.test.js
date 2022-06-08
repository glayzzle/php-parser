// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagearc_variation1.phpt
  it("Testing passing negative end angle to imagearc() of GD library", function () {
    expect(parser.parseCode("<?php\n$image = imagecreatetruecolor(100, 100);\n$white = imagecolorallocate($image, 0xFF, 0xFF, 0xFF);\n//create an arc with white color\nimagearc($image, 50, 50, 30, 30, 0, -90, $white);\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/imagearc_variation1.png', $image);\n?>")).toMatchSnapshot();
  });
});
