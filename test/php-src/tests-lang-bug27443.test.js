// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug27443.phpt
  it("Bug #27443 (defined() returns wrong type)", function () {
    expect(parser.parseCode("<?php\necho gettype(defined('test'));\n?>")).toMatchSnapshot();
  });
});
