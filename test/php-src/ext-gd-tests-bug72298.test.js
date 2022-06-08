// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug72298.phpt
  it("Bug #72298: pass2_no_dither out-of-bounds access", function () {
    expect(parser.parseCode("<?php\n$img = imagecreatetruecolor (1 , 1);\nimagecolortransparent($img, 0);\nimagetruecolortopalette($img, false, 4);\n?>\nDONE")).toMatchSnapshot();
  });
});
