// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecreatefrombmp_basic.phpt
  it("imagecreatefrombmp() - basic functionality", function () {
    expect(parser.parseCode("<?php\n// create an image from a BMP file\n$im = imagecreatefrombmp(__DIR__ . '/imagecreatefrombmp_basic.bmp');\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/imagecreatefrombmp_basic.png', $im);\n?>")).toMatchSnapshot();
  });
});
