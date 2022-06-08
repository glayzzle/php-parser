// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imageellipse_basic.phpt
  it("Testing imageellipse() of GD library", function () {
    expect(parser.parseCode("<?php\n// Create a image\n$image = imagecreatetruecolor(400, 300);\n// Draw a white ellipse\nimageellipse($image, 200, 150, 300, 200, 16777215);\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/imageellipse_basic.png', $image);\n?>")).toMatchSnapshot();
  });
});
