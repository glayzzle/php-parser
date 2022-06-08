// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug29075.phpt
  it("Bug #29075 (strnatcmp() incorrectly handles whitespace)", function () {
    expect(parser.parseCode("<?php\n    var_dump(\n        strnatcmp('foo ', 'foo '),\n        strnatcmp('foo', 'foo'),\n        strnatcmp(' foo', ' foo')\n    );\n?>")).toMatchSnapshot();
  });
});
