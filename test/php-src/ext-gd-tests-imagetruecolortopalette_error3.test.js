// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagetruecolortopalette_error3.phpt
  it("Testing imagetruecolortopalette(): wrong parameters for parameter 3", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__  . '/func.inc';\n$image = imagecreatetruecolor(50, 50);\ntrycatch_dump(\n    fn() => imagetruecolortopalette($image, true, 0)\n);\n?>")).toMatchSnapshot();
  });
});
