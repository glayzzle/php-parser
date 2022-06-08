// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecreatetruecolor_basic.phpt
  it("Testing imagecreatetruecolor() of GD library", function () {
    expect(parser.parseCode("<?php\n$image = imagecreatetruecolor(180, 30);\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/imagecreatetruecolor_basic.png', $image);\n?>")).toMatchSnapshot();
  });
});
