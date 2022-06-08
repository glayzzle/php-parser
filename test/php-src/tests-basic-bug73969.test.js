// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/bug73969.phpt
  it("Bug #73969: segfault on debug_print_backtrace with require() call", function () {
    expect(parser.parseCode("<?php\ntrait c2\n{\n    public static function f1()\n    {\n    }\n}\nclass c1\n{\n    use c2\n    {\n        c2::f1 as f2;\n    }\n    public static function go()\n    {\n        return require('bug73969.inc');\n    }\n}\nc1::go();\n?>")).toMatchSnapshot();
  });
});
