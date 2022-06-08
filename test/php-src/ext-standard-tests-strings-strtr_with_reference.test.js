// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strtr_with_reference.phpt
  it("strtr() with references", function () {
    expect(parser.parseCode("<?php\n$foo = 'foo';\n$arr = ['bar' => &$foo];\nvar_dump(strtr('foobar', $arr));\n?>")).toMatchSnapshot();
  });
});
