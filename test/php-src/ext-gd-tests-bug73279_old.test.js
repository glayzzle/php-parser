// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug73279_old.phpt
  it("Bug #73279 (Integer overflow in gdImageScaleBilinearPalette())", function () {
    expect(parser.parseCode("<?php\n$src = imagecreate(100, 100);\nimagecolorallocate($src, 255, 255, 255);\n$dst = imagescale($src, 200, 200, IMG_BILINEAR_FIXED);\nprintf(\"color: %x\\n\", imagecolorat($dst, 99, 99));\n?>")).toMatchSnapshot();
  });
});
