// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug73868.phpt
  it("Bug 73868 (DOS vulnerability in gdImageCreateFromGd2Ctx())", function () {
    expect(parser.parseCode("<?php\nvar_dump(imagecreatefromgd2(__DIR__ . DIRECTORY_SEPARATOR . 'bug73868.gd2'));\n?>")).toMatchSnapshot();
  });
});
