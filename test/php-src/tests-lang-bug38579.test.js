// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug38579.phpt
  it("Bug #38579 (include_once() may include the same file twice)", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__.\"/bug38579.inc\";\ninclude_once(strtolower($file));\ninclude_once(strtoupper($file));\n?>")).toMatchSnapshot();
  });
});
