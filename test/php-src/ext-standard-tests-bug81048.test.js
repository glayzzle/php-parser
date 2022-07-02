// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/bug81048.phpt
  it("Bug #81048 (phpinfo(INFO_VARIABLES) \"Array to string conversion\")", function () {
    expect(parser.parseCode("<?php\n$_ENV = [];\n$_SERVER = ['foo' => ['bar' => ['baz' => 'qux']]];\narray_walk_recursive($_SERVER, function($value, $key) {\n    // NOP\n});\nphpinfo(INFO_VARIABLES);\n?>")).toMatchSnapshot();
  });
});
