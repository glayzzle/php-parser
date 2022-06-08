// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecreatefromtga_basic.phpt
  it("imagecreatefromtga() - basic functionality", function () {
    expect(parser.parseCode("<?php\n// create an image from a TGA file\n$im = imagecreatefromtga(__DIR__ . '/imagecreatefromtga_basic.tga');\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/imagecreatefromtga.png', $im);\n?>")).toMatchSnapshot();
  });
});
