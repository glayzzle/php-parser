// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug39780_extern.phpt
  it("Bug #39780 (PNG image with CRC/data error raises a fatal error)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatefrompng(__DIR__ . '/bug39780.png');\nvar_dump($im);\n?>")).toMatchSnapshot();
  });
});
