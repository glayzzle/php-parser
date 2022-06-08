// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug72823.phpt
  it("Bug #72823 (strtr out-of-bound access)", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    strtr(11, array('aaa' => 'bbb'))\n);\n?>")).toMatchSnapshot();
  });
});
