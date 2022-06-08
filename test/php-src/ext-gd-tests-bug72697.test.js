// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug72697.phpt
  it("Bug #72697: select_colors write out-of-bounds", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/func.inc';\n$img=imagecreatetruecolor(10, 10);\ntrycatch_dump(\n    fn() => imagetruecolortopalette($img, false, PHP_INT_MAX / 8)\n);\n?>\nDONE")).toMatchSnapshot();
  });
});
