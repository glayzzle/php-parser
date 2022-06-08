// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bool_not_001.phpt
  it("JIT BOOL_NOT: 001 Memory leak in case of reference to bool", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $a = true;\n    var_dump(!$b =& $a);\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
