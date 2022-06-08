// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecreate_error.phpt
  it("Testing imagecreate(): error on out of bound parameters", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/func.inc';\ntrycatch_dump(\n    fn() => imagecreate(-1, 30),\n    fn() => imagecreate(30, -1)\n);\n?>")).toMatchSnapshot();
  });
});
