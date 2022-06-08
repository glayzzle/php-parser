// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagetruecolortopalette_error4.phpt
  it("Testing imagetruecolortopalette(): out of range parameter 3", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__  . '/func.inc';\n$image = imagecreatetruecolor(50, 50);\ntrycatch_dump(\n    fn() => imagetruecolortopalette($image, true, 0),\n    fn() => imagetruecolortopalette($image, true, -1)\n);\n?>")).toMatchSnapshot();
  });
});
