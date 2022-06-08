// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecreatetruecolor_error2.phpt
  it("Testing imagecreatetruecolor(): error on out of bound parameters", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/func.inc';\ntrycatch_dump(\n    fn() => imagecreatetruecolor(-1, 30),\n    fn() => imagecreatetruecolor(30, -1)\n);\n?>")).toMatchSnapshot();
  });
});
