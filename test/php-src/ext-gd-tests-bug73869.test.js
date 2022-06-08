// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug73869.phpt
  it("Bug #73869 (Signed Integer Overflow gd_io.c)", function () {
    expect(parser.parseCode("<?php\nvar_dump(imagecreatefromgd2(__DIR__ . DIRECTORY_SEPARATOR . 'bug73869a.gd2'));\nvar_dump(imagecreatefromgd2(__DIR__ . DIRECTORY_SEPARATOR . 'bug73869b.gd2'));\n?>")).toMatchSnapshot();
  });
});
