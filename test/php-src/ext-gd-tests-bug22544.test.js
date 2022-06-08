// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug22544.phpt
  it("Bug #22544 (TrueColor transparency in PNG images).", function () {
    expect(parser.parseCode("<?php\n    $image = imageCreateTruecolor(640, 100);\n    $transparent = imageColorAllocate($image, 0, 0, 0);\n    $red = imageColorAllocate($image, 255, 50, 50);\n    imageColorTransparent($image, $transparent);\n    imageFilledRectangle($image, 0, 0, 640-1, 100-1, $transparent);\n    include_once __DIR__ . '/func.inc';\n    test_image_equals_file(__DIR__ . '/bug22544.png', $image);\n?>")).toMatchSnapshot();
  });
});
