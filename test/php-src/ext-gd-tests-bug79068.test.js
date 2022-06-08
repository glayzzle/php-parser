// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug79068.phpt
  it("Bug #79068 (gdTransformAffineCopy() changes interpolation method)", function () {
    expect(parser.parseCode("<?php\n$src = imagecreatetruecolor(100, 100);\nimagefilledrectangle($src, 0, 0, 99, 99, 0xffffff);\nimageline($src, 10, 10, 90, 90, 0x000000);\nimagesetinterpolation($src, IMG_BSPLINE);\nimageaffine($src, [1, 1, 1, 1, 1, 1]);\nvar_dump(imagegetinterpolation($src) === IMG_BSPLINE);\n?>")).toMatchSnapshot();
  });
});
