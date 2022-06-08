// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/add_003.phpt
  it("JIT ADD: 003", function () {
    expect(parser.parseCode("<?php\nfunction foo($var) {\n  $ret = $var + 1;\n  var_dump($ret);\n}\nfoo(PHP_INT_MAX);\n?>")).toMatchSnapshot();
  });
});
